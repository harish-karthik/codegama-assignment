import React from "react";

function RestaurantList(props) {
  const { allRestaurants } = props;
  return (
    <ul>
      {allRestaurants.map((restaurant) => (
        <li>{restaurant.restaurant_name}</li>
      ))}
    </ul>
  );
}

export default RestaurantList;
