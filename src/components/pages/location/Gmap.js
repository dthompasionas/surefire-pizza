import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "200px",
  height: "250px",
} 


const center = {
    lat: 42.496900,
    lng: -94.203300
};

function Gmap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB0KuLwzKBEasfARfGWtEHywkST239I4as",
  });

  const [Gmap, setMap] = React.useState(null);
  
//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

  const onUnmount = React.useCallback(function callback(Gmap) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
    //   onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center}/>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Gmap;
