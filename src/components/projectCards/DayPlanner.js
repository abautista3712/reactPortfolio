import React from "react";
import Card from "react-bootstrap/Card";

const DayPlanner = () => {
  return (
    <Card>
      <div>
        <Card.Img
          src="./assets/images/resized/dayPlanner3by2.png"
          alt="Card image"
        />
      </div>
      <Card.ImgOverlay className="darkenImage">
        <Card.Title>Day Planner</Card.Title>
        <Card.Text>
          An editable web application capable of recording the user's schedule
          by the hour.
        </Card.Text>
        <Card.Text>
          Tools Used: HTML, CSS, JavaScript, jQuery, Moment.js
        </Card.Text>
        <Card.Link
          href="https://abautista3712.github.io/DayPlanner/"
          target="_blank"
        >
          Demo
        </Card.Link>
        <Card.Link
          href="https://github.com/abautista3712/DayPlanner"
          target="_blank"
        >
          GitHub
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default DayPlanner;
