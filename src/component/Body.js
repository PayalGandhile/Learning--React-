import RestaurantCart from "./RestaurantCart";
import resList from "../utils/mockData";


const Body = () => {
  return (
    <div className="body">
      <div className="resContainer">
        {/* <RestaurantCart resData={resList[0]} /> */}
        {resList.map((restaurant) => (
          <RestaurantCart key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;