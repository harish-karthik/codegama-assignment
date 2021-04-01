import React from "react";

function RestaurantList(props) {
  const { allRestaurants } = props;
  return (
    <ul>
      {allRestaurants.map((restaurant) => (
        <li key={restaurant.restaurant_id}>{restaurant.restaurant_name}</li>
      ))}
    </ul>
  );
}

export default RestaurantList;
