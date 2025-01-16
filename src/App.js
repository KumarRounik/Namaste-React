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
import  ReactDOM from "react-dom/client";
//Default Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//Named Import
import { IMG_CDN_URL } from "./contants";

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



//React Component
// Functional- NEW - I will use this most of the time
//Name of the component starts with capital letter - it's not mandatory//



// const burgerKing = {
//     name: "Burger King",
//     image: "https://b.zmtcdn.com/data/pictures/chains/8/310078/7c8d1e6d9612e5bee0d54a39188e95a4.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
//     cusines: ["Burger", "American"],
//     rating: "4.2",
// };

//props = properties





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