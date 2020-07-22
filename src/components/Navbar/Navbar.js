import React from "react";
import NavbarWrapper, {
  Container,
  LogoArea,
  MenuArea,
  FavoriteArea,
  MenuWrapper,
  SpaceRight
} from "./Navbar.style";

const Navbar = ({ logo, buttonFavorite, navMenu }) => {
  return (
    <NavbarWrapper className="navbar">
      <Container>
        <LogoArea>{logo}</LogoArea>
        <FavoriteArea>{buttonFavorite}</FavoriteArea>
        <SpaceRight />
        <MenuArea>
          <MenuWrapper>{navMenu}</MenuWrapper>
        </MenuArea>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
