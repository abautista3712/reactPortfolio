import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const WeatherNow = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/weatherNow3by2.jpg"
        alt="Card image with banner"
        style={{ filter: "brightness(.9)" }}
      />
      <Card.ImgOverlay className="px-0 centerFlex">
        <Card className="text-center thumbBanner">
          <Card.Text className="my-auto" style={{ backgroundColor: "black" }}>
            <h3>WeatherNow</h3>
          </Card.Text>
          <Card.Text className="my-auto">
            <Container>
              <Row>
                <Col
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  style={{ fontSize: 13 }}
                  className="centerFlex"
                >
                  Tools Utilized:
                </Col>
                <Col style={{ fontSize: 12 }} className="centerFlex">
                  HTML, CSS, JavaScript, jQuery, OpenWeather API
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherNow;
