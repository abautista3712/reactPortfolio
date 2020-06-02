import React from "react";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const projectOne = () => {
  return <Image src="./assets/images/inOrOut.PNG" rounded fluid />;
};

const projectTwo = () => {
  return <Image src="./assets/images/weatherNow.PNG" rounded fluid />;
};

const projectThree = () => {
  return <Image src="./assets/images/dayPlanner.PNG" rounded fluid />;
};

const projectFour = () => {
  return <Image src="./assets/images/noteTaker.PNG" rounded fluid />;
};

const projectFive = () => {
  return (
    <Image
      src="./assets/images/nodeExpressHandlebarsScreenshot.PNG"
      rounded
      fluid
    />
  );
};

const projectSix = () => {
  return <Image src="./assets/images/covid19Tracker.PNG" rounded fluid />;
};

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col className="projectCardSizing">{projectOne()}</Col>
        <Col>{projectTwo()}</Col>
        <Col>{projectThree()}</Col>
      </Row>
      <Row>
        <Col>{projectFour()}</Col>
        <Col>{projectFive()}</Col>
        <Col>{projectSix()}</Col>
      </Row>
    </Container>
  );
};

export default Projects;
