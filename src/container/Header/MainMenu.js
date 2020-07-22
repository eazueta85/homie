import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavLink = styled.a`
  color: #4a4a4a;
  font-size: 13px;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  padding: 0px 15px;
  line-height: 60px;
  text-align: center;
  min-width: 140px;
  min-height: 60px;
  cursor: pointer;
  &:hover {
    background-color: rgb(238, 238, 238);
    transition: background-color 0.2s linear 0s;
  }
`;

const MainMenu = () => {
  return (
    <Nav>
      <NavLink href={"#"}>¿Cómo funciona?</NavLink>
      <NavLink href={"#"}>Soy propietario</NavLink>
      <NavLink href={"#"}>Iniciar sesión</NavLink>
    </Nav>
  );
};

export default MainMenu;
