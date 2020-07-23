import React, { useState, useEffect } from "react";
import MapWrapper from "./MapWrapper";
import Marker from "./Marker";
import FixedMap from "./Map.style";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { activeProperties } from '../../store/actions/activePropertyAction'

const Map = ({ properties }) => {
  const locationCenterDefault = { lat: 19.3207671, lng: -99.2930415 };
  const [locationCenter, setLocationCenter] = useState(locationCenterDefault);
  const [markerIndex, setMarkerIndex] = useState(0);

  const dispatch = useDispatch();
  //Actions
  const sendActiveProperty = (property) => dispatch(activeProperties(property))
  //States
  const stateActiveProperty = useSelector((state) => state.activeProperty);

  const onChangeIcon = (index, location) => {
    setLocationCenter(location);
    setMarkerIndex(index);
    sendActiveProperty({index, location, active:true})
  };

  useEffect(() => {
    const { index, location } = stateActiveProperty.activeProperty
   if(index){
      setLocationCenter(location);
      setMarkerIndex(index);
    }

  },[stateActiveProperty]);

  return (
    <div>
      <FixedMap>
        <MapWrapper
          containerElement={<div style={{ height: "700px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          defaultZoom={12}
          defaultCenter={locationCenterDefault}
          center={locationCenter}
        >
          {properties.map((property) => {
            return (
              <Marker
                key={property.id}
                id={property.id}
                price={property.price}
                location={property.location}
                onClick={() => onChangeIcon(property.id, property.location)}
                iconActive={markerIndex === property.id ? true : false}
              />
            );
          })}
        </MapWrapper>
      </FixedMap>
    </div>
  );
};

export default Map;
