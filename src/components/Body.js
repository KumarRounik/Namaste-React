import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//What is state
//What is React Hooks? - Functions
//What is useState

function filterData(searchText, restaurants){
  const filterData = restaurants.filter((restaurant)=>
  restaurant
  ?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants , setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  useEffect(() =>{
    //API call
    getRestaurants();

  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5692148&lng=88.4488677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log (json);
    
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(!allRestaurants) return null;

  if (filteredRestaurants?.length===0)
    return <h1>No Restaurant match your Filter!! </h1>


  return (allRestaurants?.length === 0) ? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) =>{
            setSearchText(e.target.value);
          }}
        />
        <button
            className="search-btn"
            onClick={()=>{
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
          >
            Search
          </button>
        </div>
    
  

 
          {/* // no key (not acceptable) <<<<<< index key (last option) << unique key (best practice) -----> always try to use a unique key in map.//  */}

        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant)=>{
            return (<RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            );
          })}
        </div>
      </>
   );
};
export default Body;