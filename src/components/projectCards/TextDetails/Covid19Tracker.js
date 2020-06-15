import React from "react";
import Card from "react-bootstrap/Card";

const Covid19TrackerText = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/covid19Tracker3by2.png"
        alt="Card image"
        className="darkenImage"
      />
      <Card.ImgOverlay>
        <Card.Title>Covid-19 Tracker</Card.Title>
        <Card.Text>
          Data tracker of Covid-19 global cases visualized via heatmap.
        </Card.Text>
        <Card.Text>
          Tools Used: Bulma CSS Framework, jQuery, Node.js, Express, Moment.js,
          MySQL, Sequelize
        </Card.Text>
        <Card.Link href="http://plague.site/" target="_blank">
          Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/yankidank/covid-19-tracker/commits/master"
          target="_blank"
        >
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Covid19TrackerText;
