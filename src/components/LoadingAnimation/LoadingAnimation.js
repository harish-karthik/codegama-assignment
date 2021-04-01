import React from "react";
import classes from "./LoadingAnimation.module.css";

function LoadingAnimation() {
  return (
    <div className={classes.animationContainer}>
      <p className={classes.animationTitle}>Loading...</p>
      <div className={classes.fadingCircle}>
        <div className={`${classes.circle} ${classes.circle1}`}></div>
        <div className={`${classes.circle} ${classes.circle2}`}></div>
        <div className={`${classes.circle} ${classes.circle3}`}></div>
        <div className={`${classes.circle} ${classes.circle4}`}></div>
        <div className={`${classes.circle} ${classes.circle5}`}></div>
        <div className={`${classes.circle} ${classes.circle6}`}></div>
        <div className={`${classes.circle} ${classes.circle7}`}></div>
        <div className={`${classes.circle} ${classes.circle8}`}></div>
        <div className={`${classes.circle} ${classes.circle9}`}></div>
        <div className={`${classes.circle} ${classes.circle10}`}></div>
        <div className={`${classes.circle} ${classes.circle11}`}></div>
        <div className={`${classes.circle} ${classes.circle12}`}></div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
