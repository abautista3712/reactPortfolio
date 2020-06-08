import React from "react";
import Card from "react-bootstrap/Card";

const InOrOut = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/inOrOut3by2.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay className="darkenImage">
        <Card.Title>In or Out</Card.Title>
        <Card.Text>
          An interactive web application designed to help a user decide between
          eating in or eating out.
        </Card.Text>
        <Card.Text>Languages Used:</Card.Text>
        <Card.Link
          href="https://github.com/abautista3712/WeatherDashboard"
          target="_blank"
        >
          Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/abautista3712/In-or-Out"
          target="_blank"
        >
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default InOrOut;
