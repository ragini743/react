import { useState } from "react" ;
import ItemList from "./ItemList" ;

// import React from "react";

const RestaurantCategory = ({data,showItems,setShowIndex ,dummy }) => {
     const handleClick = ()=>{
        setShowIndex();
     }

  return (
    <div>
      {/* Header */}
      <div className="items-center my-4 shadow-lg  rounded-xl mx-auto w-2/4 p-4 ">
        <div className="justify-between flex cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
            {data.title}
        </span>

        <span className="h-3.5 w-3.5  border-t-0 border-b-4 border-r-4 border-l-0 flex border-gray-500 rotate-45 " >
         
        </span>
      </div>
      {showItems && <ItemList items={data.itemCards}  dummy = {dummy}/>}
      </div>
      {/* accordian body
       */}
    </div>
  );
};

export default RestaurantCategory;
