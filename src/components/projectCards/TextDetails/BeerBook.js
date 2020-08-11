import React from "react";
import Card from "react-bootstrap/Card";

const BeerBookText = () => {
  return (
    <Card>
      <Card.Img
        src="./assets/images/resized/beerBook3by2.png"
        alt="Card image"
        className="darkenImage"
      />
      <Card.ImgOverlay>
        <Card.Title>Beer Book</Card.Title>
        <Card.Text>
          App for beer drinkers of all levels to keep track of which beers one
          likes and which they don't.
        </Card.Text>
        <Card.Text>
          Tools Used: Mongo, Mongoose ODM, Express, React, Node.js
        </Card.Text>
        <Card.Text>
          Use the following credentials to demo
          <br />
          Username: Test
          <br />
          Password: Test
        </Card.Text>
        <Card.Link
          href="https://floating-tor-57469.herokuapp.com/"
          target="_blank"
        >
          Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/sboulom/finalProject"
          target="_blank"
        >
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default BeerBookText;
