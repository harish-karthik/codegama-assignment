import React, { useState, useEffect } from "react";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import { useParams } from "react-router-dom";
import { searchByIdUrl, requestOptions } from "../../utilities/requestOptions";
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader";
import classes from "./Restaurant.module.css";
function Restaurant() {
  let { restaurantId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [menuList, setMenuList] = useState({});
  useEffect(() => {
    fetch(`${searchByIdUrl + restaurantId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const resultRestaurantInfo = {
          name: result.result.restaurant_name,
          address: { ...result.result.address },
          phoneNumber: result.result.restaurant_phone,
          cuisines: [...result.result.cuisines],
          restaurant_id: restaurantId,
        };
        const resultMenuList = [];
        result.result.menus.forEach((menu) =>
          menu.menu_sections.forEach((menuSection) => {
            resultMenuList.push({
              name: menuSection.section_name,
              menuItems: [...menuSection.menu_items],
            });
          })
        );
        setRestaurantInfo({ ...resultRestaurantInfo });
        setMenuList([...resultMenuList]);
        setIsLoading(false);
      });
  }, [restaurantId]);
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className={classes.restaurantContainer}>
      <RestaurantHeader {...restaurantInfo} />
      {menuList.map((menuSection) => (
        <React.Fragment key={Math.random()}>
          <p>{menuSection.name}</p>
          <ul>
            {menuSection.menuItems.map((menuItem) => (
              <li key={Math.random()}>{menuItem.name}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Restaurant;
