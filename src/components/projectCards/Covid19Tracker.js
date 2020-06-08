import React from "react";
import Card from "react-bootstrap/Card";

const Covid19Tracker = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/covid19Tracker3by2.png"
        alt="Card image"
      />
      <Card.ImgOverlay className="darkenImage">
        <Card.Title>Covid-19 Tracker</Card.Title>
        <Card.Text>
          Data tracker of Covid-19 global cases visualized via heatmap.
        </Card.Text>
        <Card.Text>Languages Used:</Card.Text>
        <Card.Link href="http://plague.site/">Demo</Card.Link>
        <Card.Link href="https://github.com/yankidank/covid-19-tracker/commits/master">
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Covid19Tracker;
