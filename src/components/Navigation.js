import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const handleClickGitHub = () => {
    window.open("https://www.github.com/abautista3712", "_blank");
  };
  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/abelard-bautista", "_blank");
  };

  const handleClickResume = () => {
    window.open(`./assets/documents/resume.pdf`, `_blank`, `fullscreen=yes`);
    return false;
  };

  const pageRedirect = () => {
    return <Link to="/projects" />;
  };

  return (
    <div>
      <Navbar expand="sm" bg="dark" variant="dark" className="my-auto py-1">
        <Navbar.Brand href="/about">
          <h3>Abelard Bautista</h3>
        </Navbar.Brand>
        <container className="mr-auto textSize">
          <Navbar.Text>abelardbautista@gmail.com</Navbar.Text>
          <Navbar.Text className="mx-2">●</Navbar.Text>
          <Navbar.Text>(619) 549 7683</Navbar.Text>
        </container>
        <Nav variant="pills" className="navLinkSize">
          <Nav.Link href="/about" className="my-auto">
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
          <Nav.Link href="/projects" className="my-auto" onClick={pageRedirect}>
            Projects
          </Nav.Link>
          <Nav.Link href="" className="my-auto" onClick={handleClickResume}>
            Resume
          </Nav.Link>
          <Nav.Link>
            <img
              src="./assets/images/icons/gitHubIcon.png"
              width="35"
              height="35"
              className="my-1 mr-2"
              alt="GitHub Icon"
              onClick={handleClickGitHub}
            />
            <img
              src="./assets/images/resized/profilePicSquare.jpg"
              width="45"
              height="35"
              alt="LinkedIn Icon"
              onClick={handleClickLinkedIn}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
