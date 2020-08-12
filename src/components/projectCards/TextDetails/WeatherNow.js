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
        <Card.Text style={{ color: "yellow" }}>
          [NEW 08/2020] Remade for REACT
        </Card.Text>
        <Card.Text>
          A web application that provides the weather conditions for a
          user-chosen city.
        </Card.Text>
        <Card.Text>
          New Tools Used: React, OpenWeather One Call API
          <br />
          Tools Used: HTML, CSS, JavaScript, jQuery, OpenWeather API
        </Card.Text>
        <Card.Link
          href="https://morning-peak-95799.herokuapp.com/"
          target="_blank"
        >
          Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/abautista3712/reactWeatherDashboard"
          target="_blank"
        >
          GitHub
        </Card.Link>
        <Card.Link
          href="https://abautista3712.github.io/WeatherDashboard/"
          target="_blank"
        >
          Archived Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/abautista3712/WeatherDashboard"
          target="_blank"
        >
          Archived Demo GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherNow;
