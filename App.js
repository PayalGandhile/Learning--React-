import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    -Logo
 *    -Nav Item
 * Body
 *    -Search
 *    -ReastaurantContainer
 *        -ReastaurantCard
 *          -Image
 *          - Name of Reastaurant, Star Rating, Cuisine, 
 * Footer
 *    -copyright
 *    -links
 *    -Address
 *    -contact

 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const ReastaurantCard = () => {
  return (
    <div className="restro-card">
      <img alt="res-logo" className="res-log" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/7/d4c64e0f-946e-4c65-8be3-b6b8bd711244_b370d7b7-337a-471c-9f1e-a7b6a1ac245d.JPG" />
      <div className="res-content">
        <h3 className="res-name">Golden Wing Family Restaurant</h3>
        <p className="res-cuisine">Biryani Chakan</p>
        <div className="res-details ">
          <span className="rating">4.1 (512 ratings)</span>
          <span className="time">45-50 mins</span>
        </div>
      </div>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="ReastaurantContainer">
        <ReastaurantCard />
        <ReastaurantCard />

      </div>
    </div>

  );
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
    {/* <Footer/> */}
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout />)

