import React from "react";
import Card from "react-bootstrap/Card";

const WeatherNow = () => {
  return (
    <Card className="">
      <Card.Img
        src="./assets/images/resized/weatherNow3by2.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>WeatherNow</Card.Title>
        <Card.Text>Description of the project goes here.</Card.Text>
        <Card.Text>Languages Used:</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherNow;
