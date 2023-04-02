import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.scss";

import { useState, useEffect } from "react";

import DoorDashFavorite from "./Shimmer";

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6361186&lng=77.0888228&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //optionnal chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // if(!allRestaurants) return null ;

  return allRestaurants.length === 0 ? (
    <div className="restaurant-list">
      <DoorDashFavorite />
    </div>
  ) : (
    <>
      <div className="SearchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="searchButton"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurants.length === 0 ? (
          <h1>This Restaurant is not found</h1>
        ) : (
         
          filterRestaurants.map((restaurant) => {
            return (
              restaurant.length===0 ? (<DoorDashFavorite />):(<RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
            );
          })
        )}
        
      </div>
    </>
  );
};

export default Body;