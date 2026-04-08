import { CDN_LINK } from "../utils/constants";

const RestaurantCart = (props) => {
  // console.log(props);
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    locality,
    sla: { slaString },
  } = resData?.info;
  return (
    <div className="resCard">
      <div className="resLogo">
        <img alt="resLogo" src={CDN_LINK + cloudinaryImageId} />
      </div>
      <div className="resInfo">
        <h3 className="resName">{name}</h3>
        <div className="resMeta">
          <span className="rating"> {avgRating} Star</span>
          <span className="time">{slaString} </span>
        </div>
        <h5 className="cuisines">{cuisines.join(", ")}</h5>
        <div className="locality">{locality} </div>
      </div>
    </div>
  );
};

export default RestaurantCart;
