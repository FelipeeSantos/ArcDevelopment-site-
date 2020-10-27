import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/services" exact component={() => <div>Services</div>}/>
      <Route path="/customsoftware" exact component={() => <div>Custom Software</div>}/>
      <Route path="/mobileapps" exact component={() => <div>Mobile Apps</div>}/>
      <Route path="/websites" exact component={() => <div>Websites</div>}/>
      <Route path="/revolution" exact component={() => <div>Revolution</div>}/>
      <Route path="/about" exact component={() => <div>About</div>}/>
      <Route path="/contact" exact component={() => <div>Contact</div>}/>
      <Route path="/estimate" exact component={() => <div>Estimate</div>}/>
    </Switch>
  );
};

export default Routes;
