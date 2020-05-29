import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const handleClickGitHub = () => {
    window.open("https://www.github.com/abautista3712", "_blank");
  };
  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/abelard-bautista", "_blank");
  };

  return (
    <div>
      <Navbar expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h2>Abelard Bautista</h2>
        </Navbar.Brand>
        <Navbar.Text>abelardbautista@gmail.com</Navbar.Text>
        <Navbar.Text className="mx-2">●</Navbar.Text>
        <Navbar.Text className="mr-auto">(619) 549 7683</Navbar.Text>
        <Nav variant="pills">
          <Nav.Link href="/About" className="my-auto">
            About
          </Nav.Link>
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
          <Nav.Link href="/Projects" className="my-auto">
            Projects
          </Nav.Link>
          <Nav.Link href="/Resume" className="my-auto">
            Resume
          </Nav.Link>
          <Nav.Link>
            <img
              src="./assets/images/gitHubIcon.png"
              width="40"
              height="40"
              className="mr-2"
              alt="GitHub Icon"
              onClick={handleClickGitHub}
            />
            <img
              src="./assets/images/linkedInIcon.png"
              width="50"
              height="40"
              alt="LinkedIn Icon"
              onClick={handleClickLinkedIn}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/">
          <About />
        </Route>
        <Route path="/About"></Route>
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
