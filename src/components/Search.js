const Search = ()=>{
    return(
        <div className="flex justify-center">
        <input
          type="text"
          className="search-input "
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
    )
}
export default Search