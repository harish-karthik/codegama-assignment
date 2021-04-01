import React from "react";
import classes from "./CuisineList.module.css";

function CuisineList(props) {
  const { cuisines, restaurant_id } = props;
  let cuisineList;
  if (cuisines === undefined || cuisineList.length < 1) {
    cuisineList = ["American", "Sandwiches", "Italian"];
  } else {
    cuisineList = [...cuisines];
  }
  return (
    <p className={classes.cuisineList}>
      {cuisineList.map((cuisine) => (
        <span
          className={classes.restaurantCuisine}
          key={cuisine + restaurant_id}
        >
          {cuisine}
        </span>
      ))}
    </p>
  );
}

export default CuisineList;
