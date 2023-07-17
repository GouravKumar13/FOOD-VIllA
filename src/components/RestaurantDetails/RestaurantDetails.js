import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoorDashFavorite from "../Shimmer";
// import "./RestaurantDetails.scss";
import { IMG_CDN_URL } from "../../config";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/ReduxSlices/CartSlice";
import RestaurantName from "./restaurantName";
import CategoryCard from "./categoryCard";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RestaurantDetails = () => {
  const [visibleSection, setVisibleSection] = useState(false);

  const toggleSection = (index) => {
    if (visibleSection === index) {
      return setVisibleSection(null);
    }

    setVisibleSection(index);
  }
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

  async function getRestaurantData () {
    try {
      const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&submitAction=ENTER`
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


   setVisibleSection(1)

      // setRestaurantDetails(AllData);
      setRestaurant(AllData[0].card.card.info);
      setDiscount(DiscountDetails);
      setCatogries(AllData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    catch (error) { console.error(); }
  }

  // if (!AllRestaurantDetails) return null;

  return !Restaurant ? (
    <DoorDashFavorite />
  ) : (
    <div className=" flex m-auto  justify-center w-[80%]">
      <div className=" flex  w-10/12  flex-col justify-center  p-8">
        <RestaurantName Restaurant={ Restaurant } />
        <div className=" mt-1 text-sm  pb-6">{ Restaurant?.feeDetails?.message }</div>
        <div className="flex gap-5 text-base  font-semibold  my-3">
          <span className="diliveryTime">{ Restaurant?.sla?.slaString }</span>
          <span className="costFortwo">{ Restaurant?.costForTwoMessage }</span>
        </div>
        {/* This is where i want to use this info  */ }
        <div className="discount flex justify-start w-full gap-5">
          { discount.map((info) => {
            return (
              <div className="discount-info p-1 w-2/5 text-sm border-2 rounded-md">
                <div className=" text-sm">{ info?.header }</div>
                <span className="text-sm">{ info?.couponCode }|</span>
                <span className="min-amount">{ info?.description }</span>
              </div>
            );
          }) }
        </div>
        <div className=" flex flex-col  gap-5 mt-2 ">


          { (catogries.map((dish, index) => {
console.log(dish)
            return (
             
              <div className=" w-full flex flex-col items-stretch m-auto" key={ dish?.card?.card?.type }>
                <div className="">{ (dish?.card?.card?.title ? (
                  <div className=" m-auto mb-5 text-lg font-semibold text-gray-700">
                    <div className="mb-5 flex justify-between pr-16 " onClick={ () => toggleSection(index) } >
                      <div>
                        <span>{ dish?.card?.card?.title }</span>
                        <span> ({ dish?.card?.card?.itemCards?.length })</span>
                      </div>
                      <span>{ visibleSection === index ? <ExpandLessIcon /> : <ExpandMoreIcon /> }</span>
                    </div>
                    <div>                   
                      { visibleSection === index ? (
                      dish?.card?.card?.itemCards?.map((item) => {
                        
                        return (
                          <CategoryCard key={ item?.card?.info?.name } item={ item } handleAddItems={ handleAddItems } IMG_CDN_URL={ IMG_CDN_URL } />
                        )
                      })):null}
                    </div>


                  </div>) : null)
                }
                </div>
              </div>

            )
          })) }
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
