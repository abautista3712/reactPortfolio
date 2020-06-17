import React from "react";
import { Image } from "react-bootstrap";

const ProfilePic = () => {
  return (
    <Image
      src="./assets/images/resized/profilePicSquare.jpg"
      fluid
      roundedCircle
      style={{ maxHeight: 425 }}
    />
  );
};

export default ProfilePic;
