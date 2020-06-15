import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const DayPlanner = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/dayPlanner3by2.png"
        alt="Card image with banner"
        style={{ filter: "brightness(0.5)" }}
      />
      <Card.ImgOverlay className="px-0 centerFlex">
        <Card className="text-center thumbBanner">
          <Card.Text className="my-auto" style={{ backgroundColor: "black" }}>
            <h3>Day Planner</h3>
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
                >
                  Tools Utilized:
                </Col>
                <Col style={{ fontSize: 10 }}>
                  HTML, CSS, JavaScript, jQuery, Moment.js API
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card>
      </Card.ImgOverlay>
    </Card>
  );
};

export default DayPlanner;
