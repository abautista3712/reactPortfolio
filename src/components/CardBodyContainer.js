import React from "react";
import Card from "react-bootstrap/Card";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";

const CardBodyContainer = () => {
  return (
    <Card border="light" className="mx-auto cardBody_bgColor">
      <Card.Header as="h6" className="py-2 cardHeader_bgColor">
        <Switch>
          <Route path="/projects">Projects</Route>
          <Route path="/about">About</Route>
          <Route exact path="/">
            About
          </Route>
        </Switch>
      </Card.Header>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <About />
        </Route>
      </Switch>
    </Card>
  );
};

export default CardBodyContainer;
