import React from "react";
import {
  searchByNameUrl,
  requestOptions,
} from "../../utilities/requestOptions";
import { useHistory } from "react-router-dom";
import AsyncSelect from "react-select/async";

function RestaurantSearch() {
  let history = useHistory();
  function handleChange(selectedObject) {
    history.push(`/restaurant/${selectedObject.value}`);
  }
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
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onChange={handleChange}
      placeholder='Search For Restaurant'
    />
  );
}

export default RestaurantSearch;
