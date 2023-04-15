import React from "react";
// import "./RestaurantCard.scss";
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
    <div className="restaurantCards w-72 h-fit p-5">
      <img className=" w-full" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className=" text-lg mb-1  from-slate-700 ">{name}</h3>
      <h4 className=" text-sm mb-2 from-slate-500">{cuisines.join(", ")}</h4>
      <div className=" text-xs text-center flex gap-12  mb-5">
        <span className=" bg-lime-500  w-5">{avgRating} </span>
        <span>{slaString}</span>
        <span>{costForTwoString}</span>
      </div>
  {/* <h6>FLAT150 off | Use FLATDEAL</h6> */}
      <hr />
    </div>
  );
};

export default RestaurantCard;
