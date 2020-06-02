import React from "react";
import Card from "react-bootstrap/Card";

const InOrOut = () => {
  return (
    <Card className="">
      <Card.Img
        src="./assets/images/resized/inOrOut3by2.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>In or Out</Card.Title>
        <Card.Text>Description of the project goes here.</Card.Text>
        <Card.Text>Languages Used:</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default InOrOut;
