import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InOrOutText from "../components/projectCards/TextDetails/InOrOut";
import InOrOutThumb from "../components/projectCards/Thumbnails/InOrOut";
import DayPlannerText from "../components/projectCards/TextDetails/DayPlanner";
import DayPlannerThumb from "../components/projectCards/Thumbnails/DayPlanner";
import WeatherNowText from "../components/projectCards/TextDetails/WeatherNow";
import WeatherNowThumb from "../components/projectCards/Thumbnails/WeatherNow";
import NoteTakerText from "../components/projectCards/TextDetails/NoteTaker";
import NoteTakerThumb from "../components/projectCards/Thumbnails/NoteTaker";
import EatDaBurgerText from "../components/projectCards/TextDetails/EatDaBurger";
import EatDaBurgerThumb from "../components/projectCards/Thumbnails/EatDaBurger";
import Covid19TrackerText from "../components/projectCards/TextDetails/Covid19Tracker";
import Covid19TrackerThumb from "../components/projectCards/Thumbnails/Covid19Tracker";

const Projects = () => {
  const [isIOOShown, setIsIOOShown] = useState(false);
  const [isDPShown, setIsDPShown] = useState(false);
  const [isWNShown, setIsWNShown] = useState(false);
  const [isNTShown, setIsNTShown] = useState(false);
  const [isEDBShown, setIsEDBShown] = useState(false);
  const [isC19TShown, setIsC19TShown] = useState(false);

  return (
    <Container>
      <Row className="my-3 textSize">
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          onMouseEnter={() => setIsIOOShown(true)}
          onMouseLeave={() => setIsIOOShown(false)}
        >
          {isIOOShown ? <InOrOutText /> : <InOrOutThumb />}
        </Col>
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          onMouseEnter={() => setIsDPShown(true)}
          onMouseLeave={() => setIsDPShown(false)}
        >
          {isDPShown ? <DayPlannerText /> : <DayPlannerThumb />}
        </Col>
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          onMouseEnter={() => setIsWNShown(true)}
          onMouseLeave={() => setIsWNShown(false)}
        >
          {isWNShown ? <WeatherNowText /> : <WeatherNowThumb />}
        </Col>
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          onMouseEnter={() => setIsNTShown(true)}
          onMouseLeave={() => setIsNTShown(false)}
        >
          {isNTShown ? <NoteTakerText /> : <NoteTakerThumb />}
        </Col>
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          onMouseEnter={() => setIsEDBShown(true)}
          onMouseLeave={() => setIsEDBShown(false)}
        >
          {isEDBShown ? <EatDaBurgerText /> : <EatDaBurgerThumb />}
        </Col>
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          onMouseEnter={() => setIsC19TShown(true)}
          onMouseLeave={() => setIsC19TShown(false)}
        >
          {isC19TShown ? <Covid19TrackerText /> : <Covid19TrackerThumb />}
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
