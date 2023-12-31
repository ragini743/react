import RestaurantCard from "./RestaurantCard";

// import resList from "../utils/mockData.js";

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

  if (resListofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <div className="searchButton">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
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
        <button
          className="filter-btn"
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

      <div className="res-container">
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
