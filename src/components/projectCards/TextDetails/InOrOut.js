import React from "react";
import Card from "react-bootstrap/Card";

const InOrOutText = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/inOrOut3by2.jpg"
        alt="Darkened card image with Text"
        className="textDetails_darkenImage"
      />
      <Card.ImgOverlay className="textDetails_fontColor">
        <Card.Title>In or Out</Card.Title>
        <Card.Text>
          An interactive web application designed to help a user decide between
          eating in or eating out.
        </Card.Text>
        <Card.Text>
          Tools Used: HTML, CSS, Materialize, JavaScript, jQuery, Spoonacular
          API, Google Maps API
        </Card.Text>
        <Card.Link
          href="https://abautista3712.github.io/In-or-Out/"
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

export default InOrOutText;
