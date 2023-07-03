import { CDN_URL} from "../utils/constants"


const RestaurantCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deleveryTime } =
    resdata?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#dad4d4" }}>
      <img
        className="res-logo"
        src={ CDN_URL +       cloudinaryImageId
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
        <span className="time"> {deleveryTime}</span>
      </div>
    </div>
  );
};


export default RestaurantCard