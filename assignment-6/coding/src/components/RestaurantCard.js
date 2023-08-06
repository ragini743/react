import { CDN_URL} from "../utils/constants"


const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("Ress::", resData)
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
  // const {deliveryTime} = resData.info.sla.deliveryTime
  return (
    <div className="res-card" style={{ backgroundColor: "#dad4d4" }}>
      <img
        className="res-logo"
        src={ CDN_URL + cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <div className="ratingTime">
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
        {/* <span className="time"> {deliveryTime}</span> */}
      </div>
    </div>
  );
};


export default RestaurantCard