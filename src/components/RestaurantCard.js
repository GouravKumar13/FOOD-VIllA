import React from "react";
import "./RestaurantCard.scss";
import { IMG_CDN_URL } from "../config";


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
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="title">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <div className="ratings-dilivery-costForTwo">
        <span className="average-rating">{avgRating} </span>
        <span>{slaString}</span>
        <span>{costForTwoString}</span>
      </div>
  {/* <h6>FLAT150 off | Use FLATDEAL</h6> */}
      <hr />
    </div>
  );
};

export default RestaurantCard;
