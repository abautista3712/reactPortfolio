import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const InOrOutThumb = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/inOrOut3by2.jpg"
        alt="Card image with banner"
      />
      <Card.ImgOverlay className="px-0 centerFlex">
        <Card className="text-center thumbBanner">
          <Card.Text className="my-auto" style={{ backgroundColor: "black" }}>
            <h3 className="thumbBanner_fontColor">In or Out</h3>
          </Card.Text>
          <Card.Text className="my-auto">
            <Container>
              <Row>
                <Col
                  xs={3}
                  sm={3}
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
                  HTML, CSS, Materialize, JavaScript, jQuery, Spoonacular API,
                  Google Maps API
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card>
      </Card.ImgOverlay>
    </Card>
  );
};

export default InOrOutThumb;
