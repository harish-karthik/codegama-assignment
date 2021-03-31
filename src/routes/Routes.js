import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Restaurant from "../pages/Restaurant";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/restaurant/:restaurantId' exact>
          <Restaurant />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
