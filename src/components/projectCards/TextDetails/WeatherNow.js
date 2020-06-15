import React from "react";
import Card from "react-bootstrap/Card";

const WeatherNow = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/weatherNow3by2.jpg"
        alt="Card image"
        className="darkenImage"
      />
      <Card.ImgOverlay>
        <Card.Title>WeatherNow</Card.Title>
        <Card.Text>
          A web application that provides the weather conditions for a
          user-chosen city.
        </Card.Text>
        <Card.Text>
          Tools Used: HTML, CSS, JavaScript, jQuery, OpenWeather API
        </Card.Text>
        <Card.Link
          href="https://abautista3712.github.io/WeatherDashboard/"
          target="_blank"
        >
          Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/abautista3712/WeatherDashboard"
          target="_blank"
        >
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherNow;