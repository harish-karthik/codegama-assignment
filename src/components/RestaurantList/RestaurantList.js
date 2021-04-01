import React from "react";
import RestaurantLinks from "../RestaurantLinks/RestaurantLinks";
import classes from "./RestaurantList.module.css";

function RestaurantList(props) {
  const { allRestaurants } = props;
  return (
    <div className={classes.restaurantList}>
      {allRestaurants.map((restaurant) => (
        <RestaurantLinks key={restaurant.restaurant_id} {...restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
