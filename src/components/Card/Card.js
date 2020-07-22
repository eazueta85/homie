import React from "react";
import Slick from "./Slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import bedroom from "../../assets/images/features/bedroom.png";
import bathrooms from "../../assets/images/features/bathrooms.png";
import parking from "../../assets/images/features/parking.png";
import pet from "../../assets/images/features/pet.png";
import CardWrapper from "./Card.style";

const Card = ({ active }) => {
  return (
    <CardWrapper className={active ? "active" : ""}>
      <div className="content">
        <div className="priceContent ">
          <span>$7500</span>
          <button className="favorite">
            {" "}
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <Slick />
        <div className="exclusiveContent">Exclusivo de Homie</div>
      </div>
      <div className="footer">
        <div className="addressContent">Bochil, Popular santa teresa</div>
        <ul className="features">
          <li>
            <span>1</span>
            <img src={bedroom} className="size-45" alt="" />
          </li>
          <li>
            <span>1</span>
            <img src={bathrooms} className="size-22" alt="" />
          </li>
          <li>
            <span>1</span>
            <img src={parking} className="size-45" alt="" />
          </li>
          <li>
            <span>1</span>
            <img src={pet} className="size-45" alt="" />
          </li>
          <li>
            <span>
              86 m<sup>2</sup>
            </span>
          </li>
        </ul>
      </div>
    </CardWrapper>
  );
};

export default Card;
