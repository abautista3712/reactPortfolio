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
        <Card.Text>
          An editable web application capable of recording the user's schedule
          by the hour.
        </Card.Text>
        <Card.Text>Languages Used:</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default DayPlanner;
