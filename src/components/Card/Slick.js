import React from "react";
import SlickWrapper from "./Slick.style"

import image from "../../assets/images/image-test-card.jpg";

const Slick = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SlickWrapper {...settings}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </SlickWrapper>
  );
};

export default Slick;
