import React from "react";
import Card from "react-bootstrap/Card";

const EatDaBurger = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/eatDaBurger3by2.png"
        alt="Card image"
      />
      <Card.ImgOverlay className="darkenImage">
        <Card.Title>Eat-Da-Burger</Card.Title>
        <Card.Text>
          A program utilizing mySQL and node express-handlebars to keep track of
          a list of burgers.
        </Card.Text>
        <Card.Text>Languages Used:</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default EatDaBurger;
