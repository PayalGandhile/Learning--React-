import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const[btnName, setBtnName]=useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src={LOGO_LINK}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>Cart</li>
          <button
         className="loginBtn"
         onClick={()=>{
          btnName==="Login"
          ? setBtnName("Logout")
          : setBtnName("Login");
         }}
         >
          {btnName}
         </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;