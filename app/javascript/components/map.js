import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const REACT_APP_GOOGLE_KEY = "AIzaSyDwUGUwqFUMioA43bUnTj5qi3rgTRVOzyk"

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -33.935110, lng: 150.998200 }}
      />
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MyMap = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default MyMap;
