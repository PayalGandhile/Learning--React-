import RestaurantCart from "./RestaurantCart";
import ListOfRestaurant from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [ResList, setResList] = useState(ListOfRestaurant);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ResList.filter((res) => res.info.avgRating > 4);
            setResList(filterList);
            {
              console.log(filterList);
            }
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resContainer">
        {/* <RestaurantCart resData={ResList[0]} /> */}
        {ResList.map((restaurant) => (
          <RestaurantCart key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
