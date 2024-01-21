import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {CDN_URL} from "../utils/constants" ;
import {itemCard_URL} from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory" ;

const RestaurantMenu = () => {
  const { resId } = useParams();
//   console.log(params);
  console.log("resId",resId)

  const dummy = "Dummy Data";
const resInfo = useRestaurantMenu(resId)

const [showIndex,setShowIndex]=useState(null)
  
  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log("resInfo", resInfo);

  const {
    name,
    cloudinaryImageId,
    costForTwo,
    costForTwoMessage,
    cuisines,
    city,
    avgRating,
  } = resInfo.data.cards[0].card.card.info;

  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log("itemcards",resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards );

  const categories = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log("categories",categories)

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-4xl">{name}</h1>
      <h4 className="text-2xl pt-3">{costForTwoMessage}</h4>
      <h4 className="text-xl p-2 mt-2 mb-2 text-white bg-green-800 inline-block">{avgRating}*</h4>

      {/*  categpories accordions */}
      {categories.map((category ,index) => 
      // controlled component
      (<RestaurantCategory key ={category?.card?.card?.title} data = {category.card.card} showItems={index=== showIndex ?true:false}
      setShowIndex={() => setShowIndex(index)} 
      dummy={dummy}
      />))}
      </div>
  );
};
export default RestaurantMenu;







   
