import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("Ress::", resData)
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return ( 
    <div className="r grid-flow-row-dense h-full pb-5 rounded-3xl text-sm md:pb-2" style={{ backgroundColor: "#dad4d4" }}>
      <div className="w-[100%] rounded-3xl"><img className="res-logo rounded-3xl" src={CDN_URL + cloudinaryImageId} /></div>
      {/* <img className="res-logo rounded-2xl" src={CDN_URL + cloudinaryImageId} /> */}
      <h3 className="font-bold pl-3 pt-4">{name}</h3>
      <h4 className="pl-3">{cuisines.join(" , ")}</h4>
      <div className="ratingTime pl-3">
        <span
          className="rating"
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "right",
          }}
        >
          {avgRating}
        </span>
        <span className="time"> Time: {deliveryTime}min</span>
      </div>
    </div>
  );
};
//higher order component
//input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = () => {
  return (props)=>{
    console.log('restdata in component', props)
    const {resData} = props;
    const x = resData.info.aggregatedDiscountInfoV3.header + " " + resData.info.aggregatedDiscountInfoV3.subHeader;


    return (
      <div className=" relative h-full">
        {/* <label>discount</label> */}
        <label className="label absolute bottom-1/2 font-bold text-center left-5 text-white
        "> {x} </label>
        <RestaurantCard {...props}/>
        </div>
    )
  }
}


export default RestaurantCard;
