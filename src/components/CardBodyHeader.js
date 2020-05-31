import React from "react";
import Card from "react-bootstrap/Card";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";

const CardBodyHeader = () => {
  return (
    <Card border="secondary" bg="dark" text="light" className="mx-auto">
      <Card.Header as="h5" className="cardHeader">
        <Switch>
          <Route path="/Projects">Projects</Route>
          <Route path="/About">About</Route>
          <Route exact path="/">
            About
          </Route>
        </Switch>
      </Card.Header>
      <Switch>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route exact path="/">
          <About />
        </Route>
      </Switch>
    </Card>
  );
};

export default CardBodyHeader;
