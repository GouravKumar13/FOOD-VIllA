export function filterData(searchText, allRestaurants) {
    const filterData = allRestaurants.filter((restaurant) =>
      restaurant?.data?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
  }