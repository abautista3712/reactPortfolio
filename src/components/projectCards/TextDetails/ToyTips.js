import React from "react";
import Card from "react-bootstrap/Card";

const ToyTipsText = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/ToyTips3by2.PNG"
        alt="Card image"
        className="textDetails_darkenImage"
      />
      <Card.ImgOverlay className="textDetails_fontColor">
        <Card.Title>Toy Tips</Card.Title>
        <Card.Text>
          Collection of tips and reviews of vintage toys from the 1990s and
          2000s.
        </Card.Text>
        <Card.Text>
          Tools Used: MySQL, Express, React, Node, React Bootstrap
        </Card.Text>
        <Card.Link href="http://www.toytips.com/" target="_blank">
          Live Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/abautista3712/toy_tips"
          target="_blank"
        >
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ToyTipsText;
