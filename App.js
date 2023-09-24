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
*
*
*/


import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
    id: "title",
    },
    "Heading 1 for parcel"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title",
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

 //passing a react element inside the root

root.render(container); 