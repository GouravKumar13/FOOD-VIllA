import React from "react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
// import "./Body.scss";

import { useState, useEffect } from "react";

import DoorDashFavorite from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import Search from "./Search";
import Filter from "./filter/filter";



const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [sort, setSort] = useState([]);
  const [sortKey, setSortKey] = useState("RELEVANCE")
  const [filter, setFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [offset, setOffset] = useState(1)

  const [filterActive, setFilterActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll)
    return () => window.removeEventListener('scroll', infiniteScroll)
  }, [])

  const infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 2 > document.documentElement.offsetHeight) {

      setOffset(prevOffset => prevOffset + 15)
    }
  }

  useEffect(() => {
    getNextPage();
  }, [sortKey, offset])

  async function getNextPage () {
    try {
      const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&offset=${offset}&sortBy=${sortKey}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
      const json = await data.json();


      setAllRestaurants(json?.data?.cards);
      setFilterRestaurants(json?.data?.cards);
    }
    catch (error) { console.log(error); }
  }

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants () {
    try {
      const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING`,{
        method: 'GET',
        mode: 'cors',
        headers:{
          "Access-Control-Allow-Origin": "*"
        },
      });

      const json = await data.json();


      setSort(json?.data?.sorts)
      setFilter(json?.data?.filters)
      //optionnal chaining

    }
    catch (error) { console.log(error); }
  }
  const isOnline = useOnline();
  if (!isOnline) {
    //add a image and make this page more attractive using updraw.co
    return <img src="../assets/undraw_going_offline_ihag.png" alt="You are offline please connect to the internet 🔴
    " />;
  }

  if (!allRestaurants) return null;





  return (

    <>
      <Search value={ searchText } onChange={ (e) => setSearchText(e.target.value) } onClick={ () => {
        const data = filterData(searchText, allRestaurants);
        setFilterRestaurants(data);
        setSearchText("");
      } } />
      <div className=" flex justify-between border-b-2 border-slate-200">
        <div>

          <h1 onClick={ () => setFilterActive(!filterActive) } className="cursor-pointer">Filter</h1>
          { filterActive && <Filter filter={filter} filterActive={filterActive} setFilterActive={setFilterActive} /> }


        </div>
        <div className="  flex  justify-end ">
          { sort.map((item) => <span className="active:text-blue-300 visited:border-black focus:border-b-2 focus:border-black hover:text-black text-slate-500   mr-4 text-sm cursor-pointer px-1" onClick={ () => setSortKey(item.key) } key={ item.key }>{ item.title }</span>) }
        </div>
      </div>
      <div className=" flex  flex-wrap  m-auto mt-10 w-[70rem]">

        { (searchText.length > 0 && filterRestaurants.length === 0) ? (
          <h1>This Restaurant is not found</h1>
        ) : (

          filterRestaurants.map((restaurant) => {


            return (

              <Link to={ "restaurant/" + restaurant.data.data.id } key={ restaurant.data.data.id } >

                <RestaurantCard  { ...restaurant.data.data } />
              </Link>
            );
          })
        ) }

      </div>
    </>
  );
};

export default Body;
