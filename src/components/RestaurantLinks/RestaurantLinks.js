import React from "react";
import { Link } from "react-router-dom";
import classes from "./RestaurantLinks.module.css";

function RestaurantLinks(props) {
  const {
    restaurant_name,
    restaurant_phone,
    restaurant_id,
    cuisines = ["American", "Sandwiches", "Burgers"],
  } = props;
  return (
    <Link
      className={classes.restaurantCard}
      to={`/restaurant/${restaurant_id}`}
    >
      <h3 className={classes.restaurantTitle}>{restaurant_name}</h3>
      <p className={classes.restaurantContact}>{restaurant_phone}</p>
      <p className={classes.cuisineList}>
        {cuisines.length > 1 ? (
          cuisines.map((cuisine) => (
            <span
              className={classes.restaurantCuisine}
              key={cuisine + restaurant_id}
            >
              {cuisine}
            </span>
          ))
        ) : (
          <span
            className={classes.restaurantCuisine}
            key={`American${restaurant_id}`}
          >
            American
          </span>
        )}
      </p>
    </Link>
  );
}

export default RestaurantLinks;
