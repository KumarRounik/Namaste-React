/*
*
*   //PARCEL BENEFITS//
*   Creates a Server
*   HMR- Hot Module Replacement
*   File watcher algorithm - C++
*   Bundling
*   Minify
*   cleaning our code
*   Dev and Production Build
*   Super Fast Build Algorithm
*   Image Optimization
*   Caching while Development
*   Compression
*   Compatible with older version of browser
*   https on dev
*   Manages Port Number
*   Consistent Hashing Algorithm
*   Zero Configuration
*   Tree Shaking - Remove unwanted code
*
*
*/

import React from "react";
import  ReactDOM, {createRoot}  from "react-dom/client";
/*
    Header
        -Logo
        -Nav Items(Right Side)
        -cart
    Body
        -Search bar
        -Restaurant
          -RestaurantCard
              -Image
              -Name
              -Rating
              -Cusines
    Footer
        -Links
        -Copyright
*/

//React.createElement => Object => HTML(DOM)//
// const heading = React.createElement(
//     "h1",
//     {
//     id: "title",
//     key: "h1",
//     },
//     "Heading 1 for parcel"
// );

const Title = () => (
    <a href="/">
   <img 
    className="logo"
    alt="logo"
    src="http://t1.gstatic.com/images?q=tbn:ANd9GcTsFA_WDM7tGA5t-3uQ8VwxLTxVD2fwELRn_QHRJ7hwxoWU5MHI"    
   />
   </a>
);

//React Component
// Functional- NEW - I will use this most of the time
//Name of the component starts with capital letter - it's not mandatory//

const Header = () => {
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const restaurantList = [
    {
                    info: {
                      id: "746580",
                      "name": "Chicago Pizza",
                      cloudinaryImageId: "80f040545552605e33eba09f8fa30be9",
                      locality: "Bidhan Nagar",
                      areaName: "Salt Lake",
                      costForTwo: "₹500 for two",
                      cuisines: [
                        "Fast Food",
                        "Pizzas"
                      ],
                      avgRating: 4.6,
                      parentId: "60277",
                      avgRatingString: "4.6",
                      totalRatingsString: "20+",
                      
                        deliveryTime: 41,
                        lastMileTravel: 2.7,
                        serviceability: "SERVICEABLE",
                        slaString: "41 mins",
                        lastMileTravelString: "2.7 km",
                        iconType: "ICON_TYPE_EMPTY"
                      ,
                      availability: {
                        nextCloseTime: "2024-01-19 21:00:00",
                        opened: true
                      },
                      badges: {
                        
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            
                          },
                          textBased: {
                            
                          },
                          textExtendedBadges: {
                            
                          }
                        }
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹120 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL"
                      },
                      orderabilityCommunication: {
                        title: {
                          
                        },
                        subTitle: {
                          
                        },
                        message: {
                          
                        },
                        customIcon: {
                          
                        }
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      reviewsSummary: {
                        
                      },
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      isNewlyOnboarded: true,
                      restaurantOfferPresentationInfo: {
                        
                      }
                    },
                    analytics: {
                      context: "seo-data-70e04822-6a99-4c25-a7fb-8b77a387206f"
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chicago-pizza-bidhan-nagar-salt-lake-kolkata-746580",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK"
                    },
                    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     },
    {
                    "info": {
                      "id": "678134",
                      "name": "Burger King",
                      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      "locality": "Millennium City",
                      "areaName": "Saltlake",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      
                        "deliveryTime": 44,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "44 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      ,
                      "availability": {
                        "nextCloseTime": "2024-01-20 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-70e04822-6a99-4c25-a7fb-8b77a387206f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/burger-king-millennium-city-saltlake-kolkata-678134",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
                    "info": {
                      "id": "677747",
                      "name": "Spice O Mystery",
                      "cloudinaryImageId": "34fcc173de592f9ee256f11fdcbdd6d3",
                      "locality": "Ahirini Market",
                      "areaName": "Salt Lake",
                      "costForTwo": "₹230 for two",
                      "cuisines": [
                        "Indian",
                        "North Indian",
                        "Snacks"
                      ],
                      "avgRating": 4.1,
                      "parentId": "405166",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "100+",
                      
                        "deliveryTime": 32,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "32 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      ,
                      "availability": {
                        "nextCloseTime": "2024-01-20 00:01:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-70e04822-6a99-4c25-a7fb-8b77a387206f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/spice-o-mystery-ahirini-market-salt-lake-kolkata-677747",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
                    "info": {
                      "id": "135901",
                      "name": "Noodles Shoodlez",
                      "cloudinaryImageId": "bxpeobnfjekqmhyz0jp0",
                      "locality": "Opposite Unitech Gate 1",
                      "areaName": "Newtown",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Chinese",
                        "Fast Food",
                        "North Indian"
                      ],
                      "avgRating": 4.1,
                      "parentId": "149968",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      
                        "deliveryTime": 35,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      ,
                      "availability": {
                        "nextCloseTime": "2024-01-26 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-70e04822-6a99-4c25-a7fb-8b77a387206f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/noodles-shoodlez-opposite-unitech-gate-1-newtown-kolkata-135901",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
                    "info": {
                      "id": "376032",
                      "name": "Made In Amritsar",
                      "cloudinaryImageId": "w7bayjjb39ubmdxl320z",
                      "locality": "Salt Lake",
                      "areaName": "Dhapa",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Indian",
                        "North Indian",
                        "Mughlai",
                        "Tandoor",
                        "Kebabs",
                        "Thalis",
                        "Punjabi",
                        "Desserts",
                        "Beverages",
                        "Home Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "128448",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "500+",
                      
                        "deliveryTime": 30,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      ,
                      "availability": {
                        "nextCloseTime": "2024-01-19 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-70e04822-6a99-4c25-a7fb-8b77a387206f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/made-in-amritsar-salt-lake-dhapa-kolkata-376032",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
                    "info": {
                      "id": "47530",
                      "name": "The Great Biryani Co.",
                      "cloudinaryImageId": "nlhxlgzmns133osxr1n6",
                      "locality": "Near Bharat Gas Godown",
                      "areaName": "Salt Lake",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Mughlai",
                        "North Indian",
                        "Tandoor",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "421775",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      
                        "deliveryTime": 27,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      ,
                      "availability": {
                        "nextCloseTime": "2024-01-20 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-70e04822-6a99-4c25-a7fb-8b77a387206f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-great-biryani-co-near-bharat-gas-godown-salt-lake-kolkata-47530",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    
];

// const burgerKing = {
//     name: "Burger King",
//     image: "https://b.zmtcdn.com/data/pictures/chains/8/310078/7c8d1e6d9612e5bee0d54a39188e95a4.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
//     cusines: ["Burger", "American"],
//     rating: "4.2",
// };

const RestaurantCard = ({
    name,
    cuisines,
   cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
        

    );
};
//props = properties

// no key (not acceptable) <<<<<< index key (last option) << unique key (best practice) -----> always try to use a unique key in map.//
const Body = () => {
    return(
        <div className="restaurant-list">
          {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
          })}
            
            
            
        </div>
    );
};

const Footer = () => {
    return <h4>Footer</h4>
};

const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

 //passing a react element inside the root//
//async defer
root.render(<AppLayout/>); 