
import { useParams } from "react-router-dom";
import shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {CDN_URL} from "../utils/constants"
import {itemCard_URL} from "../utils/constants"

const RestaurantMenu = () => {
  const { resId } = useParams();
//   console.log(params);
  console.log("resId",resId)
const resInfo = useRestaurantMenu(resId)
  
  if (resInfo === null) {
    return <shimmer />;
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
  console.log("itemcards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{costForTwo}</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>{avgRating}</h4>
      <div><img src={CDN_URL+cloudinaryImageId} /></div>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info}>
            {item.card.info.name} -   {item.card.info.price / 100}
          
            <img src={itemCard_URL+item.card.info.imageId} alt={item.card.info.name} className="itemCard-image"/>
          </li> 
        ))}
      </ul>
  
    </div>
  );
};
export default RestaurantMenu;
