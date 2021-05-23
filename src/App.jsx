import React from "react";
import Cards from "./Cards";
import Data from "./Data";
import "./index.css";
import Pro from "./Pro";
import { Route, Switch } from "react-router-dom";
import Details from "./Details";
import Details3 from "./Details3";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Pro} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/episode/:id" component={Details3} />
      </Switch>

      {/* <Menu />
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch> */}
      {/* <About />
    <Contact /> */}
      {/* <Pro />
    {Data.map(card)} */}
    </>
  );
};

export default App;
