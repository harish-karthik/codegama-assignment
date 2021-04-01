import React, { useState, useEffect } from "react";
import Select from "react-select";
import classes from "./StateSelect.module.css";
import { stateOptions } from "../../utilities/data";

function StateSelect() {
  const [displayState, setDisplayState] = useState("NY");
  function changeState(option) {
    setDisplayState(option.value);
  }
  useEffect(() => {
    console.log(displayState);
  }, [displayState]);
  return (
    <>
      <label className={classes.selectLabel} htmlFor='stateSelect'>
        Select a Region
      </label>
      <Select
        className={classes.stateSelect}
        isSearchable={true}
        name='state'
        options={stateOptions}
        onChange={changeState}
        id='stateSelect'
      />
    </>
  );
}

export default StateSelect;
