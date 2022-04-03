import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { Card, Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  // const pageRedirect = () => {
  //   return <Link to="/projects" />;
  // };

  return (
    <Container>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className="my-4 cardItem_spacing"
        >
          <Image
            src="./assets/images/resized/profilePicSquare.png"
            fluid
            roundedCircle
            alt="Circle Profile Pic"
            className="cardItem_spacing"
          />
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} xl={7}>
          <Card.Body className="cardText_bgColor cardItem_spacing cardTextBox_styling">
            <Card.Title>
              Full-Stack Software Developer in Los Angeles
            </Card.Title>
            <Card.Text className="textSize cardTextP_spacing">
              Hello! My name is Abelard Bautista and I am an aspiring Software
              Developer. I am currently a laboratory supervisor in the field of
              reproductive genetics but I am looking to transition to a career
              more focused in tech. As a lifelong learner, I aspire to continue
              learning about new computer languages and skills that I can use to
              improve my life and the lives of others. At work, I independently
              developed a productivity tool using Microsoft Excel and VBA to
              dynamically sort and provide information based on a variety of
              client parameters. This tool was incorporated by upper management
              as a model for software that all employees in my company use
              worldwide. Looking towards the future, I am excited to immerse
              myself in tech so as to equip myself with the tools to contribute
              to the development of more of these productivity projects.
            </Card.Text>
            <Card.Text className="textSize cardTextP_spacing">
              Outside of my interest in tech, I have hobbies in beer, music, and
              plants. For the past two years, I have reviewed over 100+
              different beers that I have tried throughout the world. I have
              also encouraged my friends and family, who also imbibe, to post
              their own reviews using a Google Form that I created. My current
              top three favorite beer types are Double IPAs, Hazy IPAs, and
              Marzens. One day, I aspire to develop an app that can be used for
              beer reviews and also work on other personal projects for people
              to enjoy.
            </Card.Text>
            {/* <Button variant="primary" onClick={}>
              Check Out My Projects
            </Button> */}
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
