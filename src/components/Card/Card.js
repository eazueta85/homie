import React from "react";
import Slick from "./Slick";
import expression from "../../library/utils/formats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import bedroomIcon from "../../assets/images/features/bedroom.png";
import bathroomsIcon from "../../assets/images/features/bathrooms.png";
import parkingIcon from "../../assets/images/features/parking.png";
import petIcon from "../../assets/images/features/pet.png";
import CardWrapper from "./Card.style";

const Card = ({ active, onMouseOver, property }) => {
  const {
    abbr_address,
    bathrooms,
    bedrooms,
    id,
    is_homie_exclusive,
    parkings,
    pet_friendly,
    photos,
    price,
    sqare_mts,
  } = property;
  return (
    <CardWrapper
      className={active ? "active" : ""}
      onMouseOver={() => onMouseOver()}
    >
      <div className="content">
        <div className="priceContent ">
          <span>{`$${price.toFixed(0).replace(expression, "$1,")}`}</span>
          <button className="favorite">
            {" "}
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <Slick photos={photos} />
        {is_homie_exclusive ? (
          <div className="exclusiveContent">Exclusivo de Homie</div>
        ) : (
          ""
        )}
      </div>
      <div className="footer">
        <div className="addressContent">{abbr_address}</div>
        <ul className="features">
          <li>
            <span>{bedrooms}</span>
            <img src={bedroomIcon} className="size-45" alt="" />
          </li>
          <li>
            <span>{bathrooms}</span>
            <img src={bathroomsIcon} className="size-22" alt="" />
          </li>
          <li>
            <span>{parkings}</span>
            <img src={parkingIcon} className="size-45" alt="" />
          </li>
          <li>
            <span>{pet_friendly ? "Si" : "No"}</span>
            <img src={petIcon} className="size-45" alt="" />
          </li>
          <li>
            <span>
              {sqare_mts} m<sup>2</sup>
            </span>
          </li>
        </ul>
      </div>
    </CardWrapper>
  );
};

export default Card;
