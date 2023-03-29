import React from "react";
import "./RestaurantCard.scss";


const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="restaurantCards">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3 className="title">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <div className="ratings-dilivery-costForTwo">
        <span className="average-rating">{avgRating} </span>
        <span>{slaString}</span>
        <span>{costForTwoString}</span>
      </div>
      <hr />
    </div>
  );
};

export default RestaurantCard;
