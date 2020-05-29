import React from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h2>Abelard Bautista</h2>
        </Navbar.Brand>
        <Navbar.Text className="mr-auto">{`abelardbautista@gmail.com ● (619) 549 7683`}</Navbar.Text>
        <Nav variant="pills">
          <Nav.Link href="/About">About</Nav.Link>
          {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Proejct 4</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Proejct 5</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Proejct 6</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/Resume">Resume</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
};

export default Navigation;
