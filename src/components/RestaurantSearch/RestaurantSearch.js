import React from "react";
import {
  searchByNameUrl,
  requestOptions,
} from "../../utilities/requestOptions";
import AsyncSelect from "react-select/async";

function RestaurantSearch() {
  function loadOptions(inputValue) {
    return fetch(
      `${searchByNameUrl + inputValue.toLowerCase()}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.data.map((restaurant) => {
          return {
            label: restaurant.restaurant_name,
            value: restaurant.restaurant_id,
          };
        })
      );
  }
  return <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />;
}

export default RestaurantSearch;
