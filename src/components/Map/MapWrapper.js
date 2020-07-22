import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const REACT_APP_GOOGLE_MAP_API_KEY =
  "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDtT8SXdPDKF0hcgqZtYRaFY_iCmXyyb2A&libraries=geometry,drawing,places";

const Map = withScriptjs(
  withGoogleMap((props) => <GoogleMap {...props}>{props.children}</GoogleMap>)
);

const MapWrapper = (props) => {
  return (
    <Map
      googleMapURL={REACT_APP_GOOGLE_MAP_API_KEY}
      loadingElement={<div style={{ height: `100%` }} />}
      {...props}
    >
      {props.children}
    </Map>
  );
};

export default MapWrapper;
