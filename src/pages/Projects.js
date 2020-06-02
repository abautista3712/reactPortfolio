import React from "react";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const projectOne = () => {
  return <Image src="./assets/images/resized/inOrOut3by2.jpg" rounded fluid />;
};

const projectTwo = () => {
  return (
    <Image src="./assets/images/resized/dayPlanner3by2.png" rounded fluid />
  );
};

const projectThree = () => {
  return (
    <Image src="./assets/images/resized/weatherNow3by2.jpg" rounded fluid />
  );
};

const projectFour = () => {
  return (
    <Image src="./assets/images/resized/noteTaker3by2.png" rounded fluid />
  );
};

const projectFive = () => {
  return (
    <Image src="./assets/images/resized/eatDaBurger3by2.png" rounded fluid />
  );
};

const projectSix = () => {
  return (
    <Image src="./assets/images/resized/covid19Tracker3by2.png" rounded fluid />
  );
};

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>{projectOne()}</Col>
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
