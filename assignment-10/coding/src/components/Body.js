import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus"
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

import Shimmer from "./shimmer.js";

const Body = () => {
  const [resListofRestaurants, setResList] = useState([]);
  const [newResList, SetNewResList] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("resListOfRestau",
  resListofRestaurants)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4700346&lng=81.8720841&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    // console.log(data)

    const json = await data.json();
    console.log("json",json);

    const cards=json.data.cards.filter((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log("cards", cards)
  
      const restaurantList = cards[0].card.card.gridElements.infoWithStyle.restaurants
      setResList(restaurantList);
      SetNewResList(restaurantList);
  };
  const onlineStatus = useOnlineStatus()
  if(onlineStatus===false){return <h1>looks like you're offline</h1>}
  // else{
  //   return <h1>online</h1>
  // }

  if (resListofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search flex items-baseline">
        <div className="searchButton m-4 p-4">
          <input
            type="text"
            className="searchBox border-2 border-black bg-slate-300 p-1.5"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button className="bg-green-400 px-4 py-2 mx-4 rounded-md"
            onClick={() => {
              //filter the restaurants card and update the UI
              const filteredRestaurants = resListofRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log("Fitlered response:", filteredRestaurants)
              SetNewResList(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <div>
        <button
          className="filter-btn rounded-md bg-slate-300 px-4 py-2 mx-2"
          onClick={() => {
            const filterList = resListofRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setResList(filterList);
          }}
        >
          top rated Restaurants
        </button>
        </div>
      </div>

      <div className="res-container grid gap-7 px-12 py-8 mx-10 my-8 grid-cols-4 ">
        {newResList.map((restaurant) => (
       <Link to={"/RestaurantMenu/" +restaurant.info.id}
          key={restaurant.info.id}>
            < RestaurantCard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
