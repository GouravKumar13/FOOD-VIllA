import React from 'react'

const RestaurantName = ({Restaurant}) => {
  return (
    <div>
          <h2 className=" text-2xl font-semibold mb-2  capitalize ">{ Restaurant?.name }</h2>
          <p className=" text-sm overflow-hidden text-ellipsis mb-1 whitespace-nowrap">{ Restaurant?.cuisines }</p>
          <div className=" text-sm overflow-hidden text-ellipsis mb-1 whitespace-nowrap">
            <span className="location">{ Restaurant?.areaName }, </span>
            <span className="distance">
              { Restaurant?.sla?.lastMileTravelString }
            </span>
          </div>
        </div>
  )
}

export default RestaurantName
