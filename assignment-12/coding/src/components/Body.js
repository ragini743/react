import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus"
import { useState, useEffect,useContext } from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext.js";

import Shimmer from "./Shimmer.js";

const Body = () => {
   const [resListofRestaurants, setResList] = useState([]);
  const [newResList, SetNewResList] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("resListOfRestau",
  resListofRestaurants)
  const RestaurantCardPromoted = withPromotedLabel()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D25.4700346%26lng%3D81.8720841%26offset%3D15%26sortBy%3DRELEVANCE%26pageType%3DSEE_ALL%26page_type%3DDESKTOP_SEE_ALL_LISTING"
    );
    // console.log(data)

    const json = await data.json();
    console.log("json",json);

    const cards=json.data.cards.filter((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log("cards", cards)
  
      const restaurantList = cards[0].card.card.gridElements.infoWithStyle.restaurants
      console.log("restaurantList",restaurantList)
      setResList(restaurantList);
      SetNewResList(restaurantList);
  };
  const onlineStatus = useOnlineStatus()
  if(onlineStatus===false){return <h1>looks like you're offline</h1>}
  // else{
  //   return <h1>online</h1>
  // }

  const {setUserName,loggedInUser} =useContext(UserContext)
  if (resListofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body mt-[100px] md:mt-[120px] w-[80%] mx-auto ">
      <div className="search flex flex-wrap md:flex-row items-center">
        <div className="flex searchButton my-4 md:m-4 md:p-4">
          <input
            type="text"
            className="searchBox border-2  border-gray-50 rounded-lg outline-none bg-slate-300 p-1 md:p-1.5"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button className="bg-green-400 px-2 py-1 md:px-4 md:py-2 mx-4 rounded-md"
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
        {/* <div> */}
        <button
          className="filter-btn rounded-md bg-slate-300  px-2 py-1 md:px-3 md:py-2 mx-2 md:text-sm"
          onClick={() => {
            const filterList = resListofRestaurants.filter(
              (res) => res.info.avgRating> 4
            );
            SetNewResList(filterList);
          }}
        >
          top rated Restaurants
        </button>
        {/* </div> */}
        <div className="mt-6 md:mt-0 flex md:ml-6 ">
          <label className="md:mr-1">userName : </label>
          <input className="border-2  px-1 rounded-lg outline-none lg:py-1 border-black md:ml-4"value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>

      <div className="res-container grid gap-14 py-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {newResList.map((restaurant) => (
       <Link to={"/RestaurantMenu/" +restaurant.info.id}
          key={restaurant.info.id} className="rounded-3xl">
            
            {/* if the restaurants is promoted  then add a promotes label to it  */}
  
            {restaurant.info.aggregatedDiscountInfoV3?               
             (<RestaurantCardPromoted resData={restaurant }/>) :(<RestaurantCard resData={restaurant} />)
           } 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
