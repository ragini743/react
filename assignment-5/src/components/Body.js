import RestaurantCard from "./RestaurantCard" ;

import resList from "../utils/mockData.js";

import { useState } from "react";




const Body = () => {
  //local state variable
  
  // const [value, setValue] = useState(5);
  // return <div>
  //   Hello world:
  //   <p>Current value: {value}</p>

  //   <button onClick={() => {
  //     setValue(value + 1);
  //   }}>Increment</button>
  // </div>

  const [resListofRestaurants, setResList] = useState(resList);

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
      {/* <button onClick={() => {
        const temp = [...resListofRestaurants];
        temp.push({
          "type": "restaurant",
          "data": {
          "type": "F",
          "id": "345353",
          "name": "Ragini Restaurant",
          "uuid": "64d96484-22c2-447b-a17a-cc375622d83c",
          "city": "50",
          "area": "Civil Lines",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "cjkq2dbtylk4ofxokepm",
          "cuisines": [
          "Bakery",
          "Fast Food",
          "Pizzas"
          ],
          "tags": [],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 5.5,
          "slugs": {
          "restaurant": "paradise-civil-lines-civil-lines",
          "city": "allahabad"
          },
          "cityState": "50",
          "address": "19/35, MG Marg, Civil Lines, Allahabad",
          "locality": "Mahatma Gandhi Marg",
          "parentId": 155080,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "ribbon": [
          {
          "type": "PROMOTED"
          }
          ],
          "chain": [],
          "feeDetails": {
          "fees": [
          {
          "name": "distance",
          "fee": 3600,
          "message": ""
          },
          {
          "name": "time",
          "fee": 0,
          "message": ""
          },
          {
          "name": "special",
          "fee": 0,
          "message": ""
          }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
          },
          "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7079980~p=1~eid=00000188-e83d-96ec-0313-aa5d006c011d~srvts=1687523530476",
          "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
          },
          "lastMileTravelString": "5.5 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹1000",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
          },
          "sla": {
          "restaurantId": "80320",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 5.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 5000,
          "new": false
          },
          "subtype": "basic"
          })
        setResList(temp);
      }}>Add 1 more restaurant</button> */}
    </div>
  );
};

// console.log(resListofRestaurants)

export default Body
