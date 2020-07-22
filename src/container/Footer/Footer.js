import React from "react";
import FooterWrapper from "./Footer.style";

import iconWhatsapp from "../../assets/images/whatsapp.png";
import logoHomie from "../../assets/images/homie-footer.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="section">
          <img src={logoHomie} alt="Whatsapp" className="logo" />
        </div>
        <div className="section">
          <strong>Contacto:</strong>
          <ul>
            <li>hey@homie.mx</li>
            <li>5015 1546</li>
            <li>
              <img src={iconWhatsapp} alt="Whatsapp" className="iconWhatsapp" />{" "}
              Escríbenos en facebook
            </li>
          </ul>
        </div>

        <div className="section">
          <strong>Homie:</strong>
          <ul>
            <li>Te buscamos depa</li>
            <li>Blog</li>
            <li>Equipo</li>
          </ul>
        </div>

        <div className="section">Aviso de privacidad</div>
        <div className="section">Terminos y condiciones</div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
