import React from "react";
import Sticky from "react-stickynode";
import Logo from "../../components/UI/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import MainMenu from "./MainMenu";
import ButtonFavorite from "./ButtonFavorite";
import HeaderWrapper from "./Header.style";

import logoHomie from "../../assets/images/homie-rosa-200px.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Sticky top={0} innerZ={10001} activeClass="isHeaderSticky">
        <Navbar
          logo={<Logo src={logoHomie} />}
          buttonFavorite={<ButtonFavorite />}
          navMenu={<MainMenu />}
        />
      </Sticky>
    </HeaderWrapper>
  );
};

export default Header;
