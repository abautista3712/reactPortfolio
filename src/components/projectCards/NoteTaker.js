import React from "react";
import Card from "react-bootstrap/Card";

const NoteTaker = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/noteTaker3by2.png"
        alt="Card image"
      />
      <Card.ImgOverlay className="darkenImage">
        <Card.Title>Note Taker</Card.Title>
        <Card.Text>
          A program utilizing a node.js express server for the user to read,
          write, and delete notes.
        </Card.Text>
        <Card.Text>Languages Used:</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default NoteTaker;
