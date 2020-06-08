import React from "react";
import Card from "react-bootstrap/Card";

const WeatherNow = () => {
  return (
    <Card>
      <div>
        <Card.Img
          src="./assets/images/resized/weatherNow3by2.jpg"
          alt="Card image"
        />
      </div>
      <Card.ImgOverlay className="darkenImage">
        <Card.Title>WeatherNow</Card.Title>
        <Card.Text>
          A web application that provides the weather conditions for a
          user-chosen city.
        </Card.Text>
        <Card.Text>Languages Used:</Card.Text>
        <Card.Link href="https://abautista3712.github.io/WeatherDashboard/">
          Demo
        </Card.Link>
        <Card.Link href="https://github.com/abautista3712/WeatherDashboard">
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherNow;
