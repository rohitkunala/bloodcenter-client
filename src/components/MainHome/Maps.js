
//         { lat: 14.3777, lng: 79.9291, name: "Chemudugunta" },
//         { lat: 14.3605, lng: 79.9291, name: "Kakutur" },
//         { lat: 14.3785, lng: 79.9137, name: "Kumkumpudi" },
//         { lat: 14.3993, lng: 79.9626, name: "Padarupalli" },
//         { lat: 14.3804, lng: 79.9584, name: "Kallurpalle" },
//         { lat: 14.3519, lng: 79.9759, name: "Golagamudi" },
//         { lat: 14.3819, lng: 79.992, name: "Kanuparthipadu" },
//         { lat: 14.413671, lng: 79.982161, name: "Sportello presto" },
//         { lat: 14.4163, lng: 79.9221, name: "Ambapuram" },
//         { lat: 14.439, lng: 79.9165, name: "Akkacheruvupadu" },
//         { lat: 14.433799, lng: 79.931733, name: "Ogurupadu" },
//         { lat: 14.4172, lng: 79.9445, name: "Vengalrao" },
//         { lat: 14.4107, lng: 79.9438, name: "Kottur" },
//         { lat: 14.403, lng: 79.95, name: "Ayyappa" },


import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "Chemudugunta",
    position: { lat: 14.3777, lng: 79.9291 },
  },
  {
    id: 2,
    name: "Kakutur",
    position: { lat: 14.3605, lng: 79.9291 },
  },
  {
    id: 3,
    name: "Kumkumpudi",
    position: { lat: 14.3785, lng: 79.9137 },
  },
  {
    id: 2,
    name: "Kakutur",
    position: { lat: 14.3605, lng: 79.9291 },
  },
  {
    id: 2,
    name: "Kakutur",
    position: { lat: 14.3605, lng: 79.9291 },
  },
  {
    id: 2,
    name: "Kakutur",
    position: { lat: 14.3605, lng: 79.9291 },
  },
  {
    id: 2,
    name: "Kakutur",
    position: { lat: 14.3605, lng: 79.9291 },
  },
  {
    id: 2,
    name: "Kakutur",
    position: { lat: 14.3605, lng: 79.9291 },
  },
  {
    id: 2,
    name: "Kakutur",
    position: { lat: 14.3605, lng: 79.9291 },
  },
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "80vw", height: "80vh", margin:100 }}
      zoom={12}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

const Maps = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAP2XSU0zxJBEQGhwVKQul5MIxLugThY1w" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}

export default Maps;
