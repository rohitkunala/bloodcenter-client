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

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
  DistanceMatrixService,
} from "@react-google-maps/api";
import axios from "axios";

function Map(props) {
  const { markers, color } = props;
  console.log(markers);
  const [activeMarker, setActiveMarker] = useState(null);

  let locations = [];
  for (let i of markers) {
    locations.push(i.position);
  }
  console.log(locations);
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

  // var service = new window.google.maps.DistanceMatrixService();
  // service.getDistanceMatrix(
  //   {
  //     origins: locations,
  //     destinations: locations,
  //     travelMode: "DRIVING",
  //     // unitSystem: google.maps.UnitSystem.METRIC,
  //     // avoidHighways: false,
  //     // avoidTolls: false
  //   },
  //   (res) => {
  //     console.log(res);
  //   }
  // );

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "80vw", height: "80vh", margin: 100 }}
      zoom={12}
    >
      <DistanceMatrixService
        options={{
          destinations: locations,
          origins: locations,
          travelMode: "DRIVING",
        }}
        callback={(response) => {
          console.log(response);
        }}
      />
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          title={id + "." + name}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
            scaledSize: new window.google.maps.Size(40, 40),
          }}
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

const Maps = (props) => {
  // const {markerDonors , markerHospitals} = props;
  // if(props.markerDonors)
  // markers
  // console.log(markerDonors, markerHospitals)
  const { backend } = props;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAP2XSU0zxJBEQGhwVKQul5MIxLugThY1w", // Add your API key
  });

  // var markers=[];

  const [activeMarker, setActiveMarker] = useState([]);

  useEffect(() => {
      axios
        .get(`http://localhost:5000/getMarkers?type=${backend}`)
        .then((res) => {
          setActiveMarker(JSON.parse(res.data)["markers"]);

          console.log("flask response ", res.data);
          // setActiveMarker(res.markers)
        })
        .catch((err) => {});
  }, []);

  return isLoaded
    ? activeMarker.length > 0 && (<>
        <h2 style={{marginLeft:"50vw",marginBottom:15,padding:0,color:props.color}}>{props.backend}</h2>
        <Map markers={activeMarker} color={props.color} /></>
      )
    : "loading";
};

export default Maps;
