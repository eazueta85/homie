import React from "react";
import SlickWrapper from "./Slick.style"

const Slick = ({photos}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SlickWrapper {...settings}>
     {photos.map( image => <img src={image} alt="" />)}
    </SlickWrapper>
  );
};

export default Slick;
