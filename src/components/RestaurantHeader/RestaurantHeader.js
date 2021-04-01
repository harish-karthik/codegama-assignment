import React from "react";
import CuisineList from "../CuisineList/CuisineList";
import classes from "./RestaurantHeader.module.css";

function RestaurantHeader(props) {
  const { name, phone, address, cuisine } = props;
  return (
    <header className={classes.restaurantHeader}>
      <h1 className={classes.restaurantTitle}>{name}</h1>
      <p className={classes.subText}>
        <span>{address.city}</span>
      </p>
      <p className={classes.subText}>
        <span>{phone}</span>
      </p>
      <CuisineList cuisines={cuisine} />
      <p></p>
    </header>
  );
}

export default RestaurantHeader;
