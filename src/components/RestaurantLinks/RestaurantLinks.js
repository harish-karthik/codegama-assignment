import React from "react";
import { Link } from "react-router-dom";
import classes from "./RestaurantLinks.module.css";

function RestaurantLinks(props) {
  const { restaurant_name, restaurant_phone, restaurant_id } = props;
  return (
    <Link
      className={classes.restaurantCard}
      to={`/restaurant/${restaurant_id}`}
    >
      <h3 className={classes.restaurantTitle}>{restaurant_name}</h3>
      <p className={classes.restaurantContact}>{restaurant_phone}</p>
    </Link>
  );
}

export default RestaurantLinks;
