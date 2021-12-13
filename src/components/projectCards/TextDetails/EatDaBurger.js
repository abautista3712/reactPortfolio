import React from "react";
import Card from "react-bootstrap/Card";

const EatDaBurger = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/eatDaBurger3by2.PNG"
        alt="Card image"
        className="darkenImage"
      />
      <Card.ImgOverlay className="textDetails_fontColor">
        <Card.Title>Eat-Da-Burger</Card.Title>
        <Card.Text>
          A simple program designed to keep track of a list of burgers.
        </Card.Text>
        <Card.Text>Tools Used: mySQL, Express, Express-Handlebars</Card.Text>
        <Card.Link
          href="https://mysterious-wildwood-12100.herokuapp.com/"
          target="_blank"
        >
          Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/abautista3712/nodeExpressHandlebars"
          target="_blank"
        >
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default EatDaBurger;
