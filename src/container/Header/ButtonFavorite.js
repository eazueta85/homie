import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Link = styled.a`
  color: #4a4a4a;
  font-size: 13px;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  padding: 0px 15px;
  line-height: 60px;
  min-width: 140px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(238, 238, 238);
    transition: background-color 0.2s linear 0s;
  }
  svg {
    margin-right: 5px;
    path {
      fill: rgb(255, 21, 85) !important;
    }
  }
`;

const ButtonFavorite = () => {
  return (
    <Link href={"#"}>
      <FontAwesomeIcon icon={faHeart} />
      Favoritos
    </Link>
  );
};

export default ButtonFavorite;
