import RestaurantCart from "./RestaurantCart";
import Shimmer from "./Shimmer";
// import ListOfRestaurant from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // const restaurants = ListOfRestaurant[0].data.cards
  //   .filter((item) => item?.card?.card?.info)
  //   .map((item) => item.card.card.info);

  let [resList, setResList] = useState([]);
  let [allresList, setAllrestlist] = useState([]);

  console.log("body render");
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6782865&lng=73.89503359999999&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const json = await data.json();
    console.log(json);

    const restaurants = json.data.cards
      ?.filter((item) => item?.card?.card?.info)
      ?.map((item) => item.card.card.info);

    setAllrestlist(restaurants);
    setResList(restaurants);
  };

  // conditional rendering
  // if (resList.length === 0) {
  //   return <Shimmer/>
  // }

  // here only used the ternary operator
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterRestaurant = allresList.filter((res) => {
                return (
                  res.name.toLowerCase().includes(searchText.toLowerCase()) ||
                  res.locality.toLowerCase().includes(searchText.toLowerCase())
                );
              });
              setResList(filterRestaurant);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = resList.filter((res) => res.avgRating > 4);
            setResList(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="resContainer">
        {/* <RestaurantCart resData={ResList[0]} /> */}
        {resList.map((restaurant) => {
          return <RestaurantCart key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
