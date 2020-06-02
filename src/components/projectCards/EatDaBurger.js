import React from "react";
import Card from "react-bootstrap/Card";

const EatDaBurger = () => {
  return (
    <Card className="">
      <Card.Img
        src="./assets/images/resized/eatDaBurger3by2.png"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>Eat-Da-Burger</Card.Title>
        <Card.Text>Description of the project goes here.</Card.Text>
        <Card.Text>Languages Used:</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default EatDaBurger;
