import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import DoorDashFavorite from "./Shimmer";
import "./RestaurantDetails.scss";
import { IMG_CDN_URL } from "../config";

const RestaurantDetails = () => {
  const { id } = useParams();
  // const [AllRestaurantDetails, setRestaurantDetails] = useState([]);
  const [Restaurant, setRestaurant] = useState(null);
  const [discount, setDiscount] = useState();
  const [catogries, setCatogries] = useState({});

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6361186&lng=77.0888228&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    const AllData = Object.values(json.data.cards).map((card) => {
      return card;
    });
    const DiscountDetails = Object.values(
      AllData[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    ).map((discountInfo) => {
      return discountInfo.info;
    });

    const recommendedCatogrie =
      AllData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // setRestaurantDetails(AllData);
    setRestaurant(AllData[0].card.card.info);
    setDiscount(DiscountDetails);
    setCatogries(recommendedCatogrie);
  }

  // if (!AllRestaurantDetails) return null;

  return !Restaurant ? (
    <DoorDashFavorite />
  ) : (
    <div className="wrapperDetails">
      <div className="head">
        <h2>{Restaurant?.name}</h2>
        <p>{Restaurant?.cuisines}</p>
        <div className="location-distance">
          <span className="location">{Restaurant?.areaName}, </span>
          <span className="distance">
            {Restaurant?.sla?.lastMileTravelString}
          </span>
        </div>
        <div className="message">{Restaurant?.feeDetails?.message}</div>
        <div className="cost-time">
          <span className="diliveryTime">{Restaurant?.sla?.slaString}</span>
          <span className="costFortwo">{Restaurant?.costForTwoMessage}</span>
        </div>
        {/* This is where i want to use this info  */}
        <div className="discount">
          {discount.map((info) => {
            return (
              <div className="discount-info">
                <div className="Flat-off">{info?.header}</div>
                <span className="couponCode">{info?.couponCode}|</span>
                <span className="min-amount">{info?.description}</span>
              </div>
            );
          })}
        </div>
        <div className="catogries">
          <h2>
            {catogries?.title}(<span>{catogries?.itemCards?.length}</span>)
          </h2>

          {Object.values(catogries?.itemCards).map((dish) => {
            return (
              <div className="main">
                <div className="left" key={dish?.card?.info?.id}>
                  <div className="dish">{dish?.card?.info?.name}</div>
                  <span className="cost">{dish?.card?.info?.price / 100}</span>
                  <p className="discription">{dish?.card?.info?.description}</p>
                </div>
                <div className="right">
                  <img src={IMG_CDN_URL + dish?.card?.info?.imageId} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
