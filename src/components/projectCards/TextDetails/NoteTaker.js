import React from "react";
import Card from "react-bootstrap/Card";

const NoteTaker = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/noteTaker3by2.png"
        alt="Card image"
        className="darkenImage"
      />
      <Card.ImgOverlay>
        <Card.Title>Note Taker</Card.Title>
        <Card.Text>
          A program utilizing a node.js express server for the user to read,
          write, and delete notes.
        </Card.Text>
        <Card.Text>Tools Used: Node.js, Express</Card.Text>
        <Card.Link
          href="https://stormy-wildwood-71353.herokuapp.com/"
          target="_blank"
        >
          Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/abautista3712/noteTaker"
          target="_blank"
        >
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default NoteTaker;
