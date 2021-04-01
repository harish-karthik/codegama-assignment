import React, { useState, useEffect } from "react";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import { useParams } from "react-router-dom";
import { searchByIdUrl, requestOptions } from "../../utilities/requestOptions";
function Restaurant() {
  let { restaurantId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [menuItems, setMenuItems] = useState({});
  useEffect(() => {
    fetch(`${searchByIdUrl + restaurantId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const resultRestaurantInfo = {
          name: result.result.restaurant_name,
          address: { ...result.result.address },
        };
        const resultMenuList = result.result.menus.map((menu) =>
          menu.menu_sections.map((menuSection) => {
            return {
              name: menuSection.section_name,
              menuItems: [...menuSection.menu_items],
            };
          })
        );
        setRestaurantInfo({ ...resultRestaurantInfo });
        setMenuItems([...resultMenuList]);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div>
      <h1>{restaurantInfo.name}</h1>
    </div>
  );
}

export default Restaurant;
