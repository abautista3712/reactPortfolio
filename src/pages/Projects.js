import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InOrOut from "../components/projectCards/InOrOut";
import DayPlanner from "../components/projectCards/DayPlanner";
import WeatherNow from "../components/projectCards/WeatherNow";
import NoteTaker from "../components/projectCards/NoteTaker";
import EatDaBurger from "../components/projectCards/EatDaBurger";
import Covid19Tracker from "../components/projectCards/Covid19Tracker";

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <InOrOut />
        </Col>
        <Col>
          <DayPlanner />
        </Col>
        <Col>
          <WeatherNow />
        </Col>
      </Row>
      <Row>
        <Col>
          <NoteTaker />
        </Col>
        <Col>
          <EatDaBurger />
        </Col>
        <Col>
          <Covid19Tracker />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
