import React, { useState, useEffect } from "react";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import { useParams } from "react-router-dom";
import { searchByIdUrl, requestOptions } from "../../utilities/requestOptions";
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
    <div>
      <h1>{restaurantInfo.name}</h1>
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
