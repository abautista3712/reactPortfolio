import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import InOrOut from "../components/projectCards/InOrOut";
import DayPlanner from "../components/projectCards/DayPlanner";
import WeatherNow from "../components/projectCards/WeatherNow";
import NoteTaker from "../components/projectCards/NoteTaker";
import EatDaBurger from "../components/projectCards/EatDaBurger";
import Covid19Tracker from "../components/projectCards/Covid19Tracker";

const Projects = () => {
  return (
    <Container>
      <Row className="my-3 textSize">
        <Col className="my-3" xs={12} sm={12} md={6} lg={4}>
          <InOrOut />
        </Col>
        <Col className="my-3" xs={12} sm={12} md={6} lg={4}>
          <DayPlanner />
        </Col>
        <Col className="my-3" xs={12} sm={12} md={6} lg={4}>
          <WeatherNow />
        </Col>
        <Col className="my-3" xs={12} sm={12} md={6} lg={4}>
          <NoteTaker />
        </Col>
        <Col className="my-3" xs={12} sm={12} md={6} lg={4}>
          <EatDaBurger />
        </Col>
        <Col className="my-3" xs={12} sm={12} md={6} lg={4}>
          <Covid19Tracker />
        </Col>
      </Row>
      {/* <Row className="my-4">
        <Col>
          <NoteTaker />
        </Col>
        <Col>
          <EatDaBurger />
        </Col>
        <Col>
          <Covid19Tracker />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Projects;
