import RestaurantCard from "./RestaurantCard" ;
import resList from "../utils/mockData.js"


const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn">top rated Restaurants</button>
    
      
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body
