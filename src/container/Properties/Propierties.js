import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Card from "../../components/Card/Card";
import Paginate from "../../components/Paginate/Paginate";
import Banner from "../../components/Banner/Banner";
import PropertiesWrapper from "./Properties.style";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { activeProperties } from "../../store/actions/activePropertyAction";

const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,
  offset: -100,
};

const Propierties = ({ properties }) => {
  const dispatch = useDispatch();
  //Actions
  const sendActiveProperty = (property) => dispatch(activeProperties(property));
  //States
  const stateActiveProperty = useSelector((state) => state.activeProperty);

  const onChangeMarker = (index, location) => {
    sendActiveProperty({ index, location, active: false });
  };
  const { index, location, active } = stateActiveProperty.activeProperty;

  useEffect(() => {
    if (index && active === true) {
      scroller.scrollTo(index.toString(), scrollType);
    }
  }, [stateActiveProperty]);

  return (
    <PropertiesWrapper>
      {properties.map((property) => {
        return (
          <Element name={property.id.toString()}>
              <Card
                id={property.id}
                key={property.id}
                property={property}
                active={index === property.id && active === true ? true : false}
                onMouseOver={() => onChangeMarker(property.id, property.location)}
              />
          </Element>
        );
      })}
      <Paginate />
      <Banner />
    </PropertiesWrapper>
  );
};

export default Propierties;
