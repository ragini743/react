import RestaurantCard from "./RestaurantCard" ;

import resList from "../utils/mockData.js";

import { useState , useEffect } from "react";




const Body = () => {
  const [resListofRestaurants, setResList] = useState(resList);

useEffect(()=>{
  fetchData()
},[]);

const fetchData=async ()=> {
  try {
    const response = await fetch (
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4700346&lng=81.8720841&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    )
    const body = await response.json()
    console.log(body)
    return body;
  } catch(error) {
    console.log("Got an error", error)
  }
  
}
  // console.log(resListofRestaurants)
  // console.log(resList)
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
  )
}
// console.log(resListofRestaurants)

export default Body 
