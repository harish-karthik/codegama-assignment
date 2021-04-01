import React, { useState } from "react";
import StateSelect from "../components/StateSelect/StateSelect";
import Modal from "../components/Modal/Modal";

function Home() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isLodaing, setIsLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [showModal, setShowModal] = useState(true);
  function firstLoadRegionSelect(object) {
    setIsLoading(true);
    setSelectedRegion(object.value);
    setShowModal(false);
    setFirstLoad(false);
  }
  function updateRegion(object) {
    setSelectedRegion(object.value);
  }
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
  return (
    <div>
      <h1>Home page</h1>
      <StateSelect
        selectedRegion={selectedRegion}
        setSelectedRegion={updateRegion}
      />
    </div>
  );
}

export default Home;
