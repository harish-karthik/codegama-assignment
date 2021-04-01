import React from "react";
import Select from "react-select";
import classes from "./StateSelect.module.css";
import { stateOptions } from "../../utilities/data";

function StateSelect(props) {
  const { selectedRegion, setSelectedRegion } = props;
  let selectedIndex;
  function handleChange(selectedObject) {
    setSelectedRegion(selectedObject);
  }
  if (selectedRegion !== "") {
    selectedIndex = stateOptions.findIndex(
      (element) => element.value === selectedRegion
    );
  }
  return (
    <>
      <Select
        className={classes.stateSelect}
        placeholder={
          stateOptions[selectedIndex] === undefined
            ? "Select..."
            : stateOptions[selectedIndex].label
        }
        isSearchable={true}
        isClearable={true}
        name='state'
        options={stateOptions}
        onChange={handleChange}
        id='stateSelect'
      />
    </>
  );
}

export default StateSelect;
