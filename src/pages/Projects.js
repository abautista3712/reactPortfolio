import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ToyTipsText from "../components/projectCards/TextDetails/ToyTips";
import ToyTipsThumb from "../components/projectCards/Thumbnails/ToyTips";
import Covid19TrackerText from "../components/projectCards/TextDetails/Covid19Tracker";
import Covid19TrackerThumb from "../components/projectCards/Thumbnails/Covid19Tracker";
import InOrOutText from "../components/projectCards/TextDetails/InOrOut";
import InOrOutThumb from "../components/projectCards/Thumbnails/InOrOut";
import DayPlannerText from "../components/projectCards/TextDetails/DayPlanner";
import DayPlannerThumb from "../components/projectCards/Thumbnails/DayPlanner";
import WeatherNowText from "../components/projectCards/TextDetails/WeatherNow";
import WeatherNowThumb from "../components/projectCards/Thumbnails/WeatherNow";
import NoteTakerText from "../components/projectCards/TextDetails/NoteTaker";
import NoteTakerThumb from "../components/projectCards/Thumbnails/NoteTaker";

// import EatDaBurgerText from "../components/projectCards/TextDetails/EatDaBurger";
// import EatDaBurgerThumb from "../components/projectCards/Thumbnails/EatDaBurger";
// import BeerBookText from "../components/projectCards/TextDetails/BeerBook";
// import BeerBookThumb from "../components/projectCards/Thumbnails/BeerBook";

const Projects = () => {
  const [isTTShown, setIsTTShown] = useState(false);
  const [isC19TShown, setIsC19TShown] = useState(false);
  const [isIOOShown, setIsIOOShown] = useState(false);
  const [isDPShown, setIsDPShown] = useState(false);
  const [isWNShown, setIsWNShown] = useState(false);
  const [isNTShown, setIsNTShown] = useState(false);
  // const [isEDBShown, setIsEDBShown] = useState(false);
  // const [isBBShown, setIsBBShown] = useState(false);

  return (
    <Container>
      <Row className="my-3 textSize">
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          onMouseEnter={() => setIsTTShown(true)}
          onMouseLeave={() => setIsTTShown(false)}
        >
          {isTTShown ? <ToyTipsText /> : <ToyTipsThumb />}
        </Col>
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          onMouseEnter={() => setIsC19TShown(true)}
          onMouseLeave={() => setIsC19TShown(false)}
        >
          {isC19TShown ? <Covid19TrackerText /> : <Covid19TrackerThumb />}
        </Col>
        <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={6}
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
          lg={6}
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
          lg={6}
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
          lg={6}
          onMouseEnter={() => setIsNTShown(true)}
          onMouseLeave={() => setIsNTShown(false)}
        >
          {isNTShown ? <NoteTakerText /> : <NoteTakerThumb />}
        </Col>
        {/* Eat Da Burger */}
        {/* <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          onMouseEnter={() => setIsEDBShown(true)}
          onMouseLeave={() => setIsEDBShown(false)}
        >
          {isEDBShown ? <EatDaBurgerText /> : <EatDaBurgerThumb />}
        </Col> */}
        {/* BeerBook */}
        {/* <Col
          className="my-3"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          onMouseEnter={() => setIsBBShown(true)}
          onMouseLeave={() => setIsBBShown(false)}
        >
          {isBBShown ? <BeerBookText /> : <BeerBookThumb />}
          <BeerBookText />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Projects;
