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
  veg


}) => {

  return (
    <div className="hover:shadow-2xl p-2">
      <div className="restaurantCards w-56 h-72 mx-4 mb-4 m-2   ">
        <img className=" w-full " src={ IMG_CDN_URL + cloudinaryImageId } />
        <h3 className="  my-2 font-medium font-sans   from-slate-700 ">{ name }</h3>
        <h4 className=" text-xs text-slate-500 mb-2 from-slate-500">{ cuisines?.join(",") }</h4>
        <div className=" text-xs text-center flex justify-between ">
          <p className={ `px-3 ${veg ? "bg-green-400" : "bg-red-600"}` } >{ avgRating }  </p>
          <p>{ slaString }</p>
          <p>{ costForTwoString }</p>
        </div>

      </div>
    </div>
  );
};

export default RestaurantCard;
