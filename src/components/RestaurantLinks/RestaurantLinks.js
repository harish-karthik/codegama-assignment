import React from "react";
import { Link } from "react-router-dom";
import CuisineList from "../CuisineList/CuisineList";
import classes from "./RestaurantLinks.module.css";

function RestaurantLinks(props) {
  const { restaurant_name, restaurant_phone, restaurant_id, cuisines } = props;
  return (
    <Link
      className={classes.restaurantCard}
      to={`/restaurant/${restaurant_id}`}
    >
      <h3 className={classes.restaurantTitle}>{restaurant_name}</h3>
      <p className={classes.restaurantContact}>{restaurant_phone}</p>
      <CuisineList cuisines={cuisines} restaurant_id={restaurant_id} />
    </Link>
  );
}

export default RestaurantLinks;
