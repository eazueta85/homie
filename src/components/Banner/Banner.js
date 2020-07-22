import React from "react";
import BannerWrapper from "./Banner.styled"

const Banner = () => {
  return (
    <BannerWrapper>
      <strong>¿No encuentras inmueble?</strong>
      <span>Dinos qué quieres y nosotros te lo buscamos</span>
      <button>Encuéntrenme un inmueble</button>
    </BannerWrapper>
  );
};

export default Banner;
