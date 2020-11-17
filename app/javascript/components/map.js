import React, { useState, useEffect } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const REACT_APP_GOOGLE_KEY = "AIzaSyDP6zciWkgIffCLD_H_mNpqZVV2hvjoimY"

const Map = (props) => {
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -33.935110, lng: 150.998200 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: -33.935110, lng: 150.998200 }} />}
      </GoogleMap>
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MyMap = () => {
  const [isMarkerShown, setMarker] = useState(false);

  useEffect(() => {
    delayedShownMarker()
  }, []);

  const delayedShownMarker = () => {
    setTimeout(() => {
      setMarker(true)
    }, 3000)
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        isMarkerShown={isMarkerShown}
      />
    </div>
  )
}

export default MyMap;
