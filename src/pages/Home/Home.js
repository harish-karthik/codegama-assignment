import React, { useState, useEffect, useRef } from "react";
import StateSelect from "../../components/StateSelect/StateSelect";
import Modal from "../../components/Modal/Modal";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import RestaurantList from "../../components/RestaurantList/RestaurantList";
import classes from "./Home.module.css";
import {
  searchByStateUrl,
  requestOptions,
} from "../../utilities/requestOptions";

function Home() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);
  const isComponentMounted = useRef(false);
  function firstLoadRegionSelect(object) {
    setIsLoading(true);
    setSelectedRegion(object.value);
    setShowModal(false);
    setFirstLoad(false);
  }
  function updateRegion(object) {
    setSelectedRegion(object.value);
    setIsLoading(true);
  }
  useEffect(() => {
    if (isComponentMounted.current) {
      fetch(
        `${searchByStateUrl + selectedRegion.toLowerCase()}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          let listArray = result.data.slice(0, 10);
          setRestaurantList([...listArray]);
          setIsLoading(false);
        })
        .catch((error) => console.log("error", error));
    } else {
      isComponentMounted.current = true;
    }
  }, [selectedRegion]);
  if (firstLoad) {
    return (
      <Modal
        modalTitle='Select a region'
        modalIsOpen={showModal}
        closeModal={() => setShowModal(false)}
        noFooter
      >
        <StateSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={firstLoadRegionSelect}
        />
      </Modal>
    );
  }
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className={classes.homepage}>
      <h1>Restaurants Around Your</h1>
      <StateSelect
        selectedRegion={selectedRegion}
        setSelectedRegion={updateRegion}
      />
      <RestaurantList allRestaurants={restaurantList} />
    </div>
  );
}

export default Home;
