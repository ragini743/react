import RestaurantCard from "./RestaurantCard" ;

import resList from "../utils/mockData.js";

import { useState } from "react";




const Body = () => {
  const [resListofRestaurants,setResList]=useState(resList)
  console.log(resListofRestaurants)
  console.log(resList)
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={()=> { const filterList=
          resListofRestaurants.filter((res)=>res.data.avgRating>4)
          setResList(filterList)
          
          }
          }>top rated Restaurants</button>
    
      
      </div>
      <div className="res-container">
        {resListofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

// console.log(resListofRestaurants)

export default Body
