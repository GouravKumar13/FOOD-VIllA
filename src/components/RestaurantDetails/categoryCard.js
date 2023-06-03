import React from 'react'

const CategoryCard = ({item,handleAddItems,IMG_CDN_URL}) => {
  return (
    <div className="overflow-hidden w-[100%]  flex mb-1 border-b-2 border-dotted justify-between  border-y-gray-400 " >
                <div className=" p-2 " >
                  <div className=" mb-5 text-base font-semibold text-gray-500">{item?.card?.info?.name}</div>
                  <span className="font-semibold text-gray-700">₹{item?.card?.info?.price / 100}</span>
                  <p className="text-left text-xs max-w-3xl text-gray-700">{item?.card?.info?.description}</p>
                </div>
                <div className=" flex flex-col items-end w-[50%] ">
                  <img  className="z-10 w-[190px] rounded-3xl p-4  " src={IMG_CDN_URL + item?.card?.info?.imageId}  />
                  <span className="z-20 relative text-green-500 text-sm  bottom-6 right-14  bg-white cursor-pointer" onClick={()=>handleAddItems(item)}>Add To Cart</span>
                </div>
              </div>
  )
}

export default CategoryCard
