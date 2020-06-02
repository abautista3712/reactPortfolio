import React from "react";
import Card from "react-bootstrap/Card";

const Covid19Tracker = () => {
  return (
    <Card className="">
      <Card.Img
        src="./assets/images/resized/covid19Tracker3by2.png"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>Covid-19 Tracker</Card.Title>
        <Card.Text>
          Data tracker of Covid-19 global cases visualized via heatmap.
        </Card.Text>
        <Card.Text>Languages Used:</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Covid19Tracker;
