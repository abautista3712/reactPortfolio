import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const BeerBookThumb = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/beerBook3by2.png"
        alt="Card image with banner"
      />
      <Card.ImgOverlay className="px-0 centerFlex">
        <Card className="text-center thumbBanner">
          <Card.Text className="my-auto" style={{ backgroundColor: "black" }}>
            <h3 className="thumbBanner_fontColor">Beer Book</h3>
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
                  className="centerFlex thumbBanner_fontColor"
                >
                  Tools Utilized:
                </Col>
                <Col
                  style={{ fontSize: 12 }}
                  className="centerFlex thumbBanner_fontColor"
                >
                  Mongo, Mongoose ODM, Express, React, Node.js
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card>
      </Card.ImgOverlay>
    </Card>
  );
};

export default BeerBookThumb;
