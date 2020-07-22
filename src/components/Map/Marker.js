import React from "react";
import { Marker } from "react-google-maps";
import MakerPurple from "../../assets/images/marker/marker-purple.png";
import MakerPink from "../../assets/images/marker/marker-pink.png";

const MarkerWrapper = ({ id, price, location, iconActive, onClick }) => {
  const icon = {
    url: iconActive ? MakerPink : MakerPurple,
    labelOrigin: { x: 35, y: 12 },
  };

  return (
    <Marker
      key={id}
      label={{
        text: `$ ${price}`,
        color: "white",
        fontSize: "13px",
        fontFamily: "Open Sans, sans-serif",
      }}
      icon={icon}
      position={location}
      onClick={() => onClick()}
    />
  );
};

export default MarkerWrapper;
