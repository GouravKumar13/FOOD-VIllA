import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import DoorDashFavorite from "./Shimmer";
// import "./RestaurantDetails.scss";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const RestaurantDetails = () => {

  const dispatcher = useDispatch();

  const handleAddItems = (dish) => {
    dispatcher(addItem(dish))
  }





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
    <div className=" flex  justify-center w-full">
      <div className=" flex  w-10/12  flex-col justify-center  p-8">
        <h2 className=" text-2xl font-semibold mb-2  capitalize ">{Restaurant?.name}</h2>
        <p className=" text-sm overflow-hidden text-ellipsis mb-1 whitespace-nowrap">{Restaurant?.cuisines}</p>
        <div className=" text-sm overflow-hidden text-ellipsis mb-1 whitespace-nowrap">
          <span className="location">{Restaurant?.areaName}, </span>
          <span className="distance">
            {Restaurant?.sla?.lastMileTravelString}
          </span>
        </div>
        <div className=" mt-1 text-sm  pb-6">{Restaurant?.feeDetails?.message}</div>
        <div className="flex gap-5 text-base  font-semibold  my-3">
          <span className="diliveryTime">{Restaurant?.sla?.slaString}</span>
          <span className="costFortwo">{Restaurant?.costForTwoMessage}</span>
        </div>
        {/* This is where i want to use this info  */}
        <div className="discount flex justify-start w-full gap-5">
          {discount.map((info) => {
            return (
              <div className="discount-info p-1 w-2/5 text-sm border-2 rounded-md">
                <div className=" text-sm">{info?.header}</div>
                <span className="text-sm">{info?.couponCode}|</span>
                <span className="min-amount">{info?.description}</span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full gap-10 mt-4 ">
          <h2>
            {catogries?.title}(<span>{catogries?.itemCards?.length}</span>)
          </h2>

          {Object.values(catogries?.itemCards).map((dish) => {
            return (
              <div className="overflow-hidden flex gap-9 mb-1 border-b-2 border-dotted max-h-[300px]  border-y-gray-400 " key={dish?.card?.info?.id}>
                <div className="  w-[50%]" >
                  <div className=" mb-5 text-lg font-semibold text-gray-700">{dish?.card?.info?.name}</div>
                  <span className="font-semibold text-gray-900">₹{dish?.card?.info?.price / 100}</span>
                  <p className="text-left text-xs text-gray-700">{dish?.card?.info?.description}</p>
                </div>
                <div className=" flex flex-col items-end w-[50%] ">
                  <img  className=" w-[220px] p-4 relative" src={IMG_CDN_URL + dish?.card?.info?.imageId} />
                  <span className=" relative w-[18%] text-center bottom-12 right-14  bg-green-500 cursor-pointer" onClick={()=>handleAddItems(dish)}>Add To Cart</span>
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
