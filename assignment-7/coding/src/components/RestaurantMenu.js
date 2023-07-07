import {useEffect,useState} from "react"
import shimmer from "./shimmer"


const RestaurantMenu = () => {
    [resInfo,setResInfo]= useState(null)
    useEffect(()=>{fetchMenu()},[])
    const fetchMenu= async()=>{
   const data= await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4700346&lng=81.8720841&restaurantId=150376&submitAction=ENTER")
   const json= await data.json()
   console.log(json)
   setResInfo(json.data)
   console.log("resInfo",resInfo)
    }
    if(resInfo===null){return <shimmer />}

    const {name ,cloudinaryImageId ,costForTwo ,costForTwoMessage ,cuisines ,city,avgRating}=resInfo.cards[0].card.card.info

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h4>{costForTwo}</h4>
            <h4>{costForTwoMessage}</h4>
            <h4>{avgRating}</h4>
            <ul>
                <li>Ice-creams</li>
                <li>cold drinks</li>
                <li>pizza</li>
                <li>Biryani</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu