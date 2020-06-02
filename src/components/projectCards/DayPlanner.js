import React from "react";
import Card from "react-bootstrap/Card";

const DayPlanner = () => {
  return (
    <Card className="">
      <Card.Img
        src="./assets/images/resized/dayPlanner3by2.png"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>Day Planner</Card.Title>
        <Card.Text>Description of the project goes here.</Card.Text>
        <Card.Text>Languages Used:</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default DayPlanner;
