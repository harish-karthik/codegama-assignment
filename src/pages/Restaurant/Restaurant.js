import React from "react";
import { useParams } from "react-router-dom";
function Restaurant() {
  let { restaurantId } = useParams();
  return (
    <div>
      <h1>Restaurant - {restaurantId}</h1>
    </div>
  );
}

export default Restaurant;
