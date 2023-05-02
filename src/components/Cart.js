import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import {removeItems , clearCart} from "../redux/ReduxSlices/CartSlice"
const Cart =()=>{

    const cartItems  = useSelector(Store => Store.cart.items);
  
    dispatch = useDispatch()
    const handleRemoveItems = (dish) =>{
        dispatch(removeItems(dish))

    }
    const handleResetCart = (dish) =>{
        dispatch(clearCart(dish))
    }
    return(
        <div className="w-full flex  flex-col  ">
        <h1>Cart{cartItems.length}</h1>
        {Object.values(cartItems).map((dish) => {
            return (
                
              <div className="overflow-hidden flex justify-items-center w-[50%] items-center gap-9 mb-1 m-auto border-b-2 border-dotted max-h-[300px]  border-y-gray-400 " key={dish?.card?.info?.id} >
                <div className="  w-[40%] text-start" >
                  <div className=" mb-5 text-lg font-semibold text-gray-700">{dish?.card?.info?.name}</div>
                  <span className="font-semibold text-gray-900">₹{dish?.card?.info?.price / 100}</span>
                  <p className="text-left text-xs text-gray-700">{dish?.card?.info?.description}</p>
                </div>
                <div className=" flex flex-col items-end w-[50%] ">
                  <img  className=" w-[220px] p-4 relative" src={IMG_CDN_URL + dish?.card?.info?.imageId} /> 
                  <button className=" relative  text-center bottom-12 right-20  bg-green-500 cursor-pointer" onClick={()=>handleRemoveItems(dish)}>REMOVE</button>
                  
                </div>
                
        <button onClick={()=>handleResetCart(dish)}>RestCart</button>
                
                
              </div>
            );
          })}
          </div>
    )
}
export default Cart