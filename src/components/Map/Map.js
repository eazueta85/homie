import React, { useState } from "react";
import MapWrapper from "./MapWrapper";
import Marker from "./Marker";
import FixedMap from "./Map.style";

const Map = ({ properties }) => {
  const locationCenterDefault = { lat: 19.3207671, lng: -99.2930415 };
  const [locationCenter, setLocationCenter] = useState(locationCenterDefault);
  const [markerIndex, setMarkerIndex] = useState(0);

  const onChangeIcon = (index, location) => {
    setLocationCenter(location);
    setMarkerIndex(index);
  };

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
