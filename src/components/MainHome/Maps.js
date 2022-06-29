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
  DirectionsRenderer,
} from "@react-google-maps/api";
import axios from "axios";
import "./Styles/mainpage.css";
import Button from "@mui/material/Button";
import TemporaryDrawer from "./drawer";

class MapDirectionsRenderer extends React.Component {
  state = {
    ops: null,
    directions: null,
    error: null,
  };

  componentDidMount() {
    const { places, travelMode, valueformarker } = this.props;
    console.log("places :", places);
    const waypoints = places.map((p) => ({
      location: { lat: p.position.lat, lng: p.position.lng },
      stopover: true,
    }));
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            ops: valueformarker,
            directions: result,
          });
        } else {
          this.setState({ error: result });
        }
      }
    );
  }

  render() {
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }
    return (
      this.state.directions && (
        <DirectionsRenderer
          directions={this.state.directions}
          options={{ suppressMarkers: this.state.ops }}
        />
      )
    );
  }
}

function Map(props) {
  // useEffect(() =>{
  //   if(props.backend === "fixed"){
  //     setNearestMarker(getNextNearMarker(bloodCenterPosition))
  //   }
  //   else if(props.backend === "mobile"){
  //     // for()
  //   }
  // },[])
  const { markers, color } = props;
  console.log(markers);
  const [activeMarker, setActiveMarker] = useState(null);
  const [distances, setDistances] = useState([]);
  const [orderedDistances, setOrderedDistances] = useState([]);

  const bloodCenterPosition = { lat: 14.4155, lng: 79.9587 };
  const [nearestMarker, setNearestMarker] = useState({
    id: 0,
    name: "Vedayapalem",
    position: bloodCenterPosition,
  });

  // const [mBFOrderList, setMBFOrderList] = useState([]);
  // let mBFOrderList = [];
  const [tmpPath, setTmpPath] = useState([
    { id: 0, name: "Vedayapalem", position: bloodCenterPosition },
  ]);
  const [tmpPathNames, setTmpPathNames] = useState(["Vedayapalem"]);

  let locations = [];
  let obj = {};
  let idx = 0;
  for (let i of markers) {
    locations.push(i.position);
    obj[idx++] = i.name;
  }

  // let mblocations=[...locations]
  // if(props.backend=="mobile"){
  //   for (let i = mblocations.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [mblocations[i], mblocations[j]] = [mblocations[j], mblocations[i]];
  // }
  // }
  console.log("locations , obj ", locations, obj);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    bounds.extend(bloodCenterPosition);
    map.fitBounds(bounds);
  };

  let hoslocations = [];
  if (props.backend == "hospital") {
    for (let loc of locations) {
      hoslocations.push([
        { position: loc },
        { position: bloodCenterPosition },
      ]);
    }
  }

  useEffect(() => {
    if (props.backend === "mobile") {
      var service2 = new window.google.maps.DistanceMatrixService();
      const getNextNearMarker = () => {
        console.log("calling service2 ");
        console.log("tmpPath are :", tmpPath);
        console.log("nearestMarker are :", nearestMarker);
        console.log("locations(destination) are :", locations);
        service2.getDistanceMatrix(
          {
            origins: [nearestMarker.position],
            destinations: locations,
            travelMode: "DRIVING",
            // unitSystem: google.maps.UnitSystem.METRIC,
            // avoidHighways: false,
            // avoidTolls: false
          },
          (res) => {
            console.log("service2 response , tmpPath is :", res, tmpPath);
            let min = -1,
              minDist = 10000000;
            let arr = res?.rows[0]?.elements;
            for (let i = 0; i < arr.length; i++) {
              let tmp = arr[i].distance.value;
              // console.log(
              //   "tmpPathNames.includes(obj[i]), obj[i], tmpPathNames :",
              //   tmpPathNames.includes(obj[i]),
              //   obj[i],tmpPathNames
              // );
              if (!tmpPathNames.includes(obj[i]) && tmp < minDist) {
                min = i;
                minDist = tmp;
              }
            }
            // console.log("This is the min dist ",min,minDist,markers[min])
            if (min !== -1) {
              setTmpPath([...tmpPath, markers[min]]);
              setTmpPathNames([...tmpPathNames, markers[min].name]);
              setNearestMarker(markers[min]);
              console.log(
                "tmpPathNames,setNearestMarker :",
                tmpPathNames,
                markers[min]
              );
            }
          }
        );
      };
      getNextNearMarker();
    }
  }, [nearestMarker]);

  if (props.backend !== "hospital") {
    var service = new window.google.maps.DistanceMatrixService();
    console.log("locations", locations);
    service.getDistanceMatrix(
      {
        origins: locations,
        destinations: locations,
        travelMode: "DRIVING",
        // unitSystem: google.maps.UnitSystem.METRIC,
        // avoidHighways: false,
        // avoidTolls: false
      },
      (res) => {
        console.log("distance vector matrix res :", res);
        let tmpDistances = [];
        let ordDistances = [];

        const { rows } = res;
        for (let row = 0; row < rows.length; row++) {
          const { elements } = rows[row];
          let tmpArr = [];
          //  console.log("row , obj[row] ",row,obj[row])
          for (let ele = 0; ele < elements.length; ele++) {
            tmpArr.push(elements[ele]["distance"]["value"]);
          }
          tmpArr.push(obj[row]);
          tmpDistances.push(tmpArr);
          let tmp = [...tmpArr];
          tmp.sort((a, b) => a - b);
          //  console.log("temp, obj",tmp,obj[row])
          // console.log("ordered tmp :",tmpArr,tmp);
          ordDistances.push(tmp);
        }
        
        var n = ordDistances[0].length;
        console.log("ordDistances :",ordDistances)
        ordDistances = ordDistances.sort((a, b) => {
          let i = 0;
          while (i++ < n) {
            console.log("a,b,i :",a,b,i)
            if (a[i] > b[i]) return 1;
            else if (a[i] < b[i]) return -1;
          }
          return 0;
        });
        console.log("this is ordDistance before unshift :", ordDistances);
        //  for (let s=0;s<ordDistances.length;s++){
        //   ordDistances[s].unshift(obj[s])
        //  }
        console.log("this is orddis", ordDistances);

        setDistances(tmpDistances);
        setOrderedDistances(ordDistances);
        console.log("our array tmp, ord :", tmpDistances, ordDistances);
      }
    );
    console.log("tmpPathNames , locations", tmpPathNames, locations);
  }

  return (
    <>
      {/* <h2>
        Nearest marker is :
        <span style={{ color: "rgb(135,206,250)" }}>{nearestMarker?.name}</span>
      </h2> */}
      <GoogleMap
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{
          width: "60vw",
          height: "75vh",
          marginLeft: "14vw",
          marginRight: "14vh",
        }}
        zoom={11}
      >
        {props.backend === "fixed" && (
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
        )}
        
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
        <Marker
          key={0}
          position={bloodCenterPosition}
          title={"0.vedayapalem"}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/green-dot.png`,
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          onClick={() => handleActiveMarker(0)}
        >
          {activeMarker === 0 ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>vedayapalem</div>
            </InfoWindow>
          ) : null}
        </Marker>
        {/* <button className="detailsbutton" >Details</button> */}
        {props.backend === "hospital" &&
          hoslocations.map((locations) => (
            <MapDirectionsRenderer
              places={locations}
              travelMode="DRIVING"
              valueformarker={true}
            />
          ))}
        {props.backend == "fixed" && (
          <TemporaryDrawer
            tabledetails={distances}
            tabledetails2={orderedDistances}
            backend={props.backend}
          />
        )}
        {props.backend === "mobile" &&
          tmpPathNames.length === locations.length + 1 && (
            <>
              <MapDirectionsRenderer
                places={tmpPath}
                travelMode="DRIVING"
                valueformarker={false}
              />
              {
                <TemporaryDrawer
                  tabledetails={distances}
                  tabledetails2={tmpPathNames.map((name) => {
                    return [name];
                  })}
                  backend={props.backend}
                />
              }
            </>
          )}
      </GoogleMap>
    </>
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

  return isLoaded ? (
    activeMarker.length > 0 ? (
      <>
        <h2
          style={{
            margin: 0,
            fontSize: 35,
            padding: 0,
            textAlign: "center",
            fontFamily: `"Rokkitt", "serif"`,
          }}
        >
          {props.backend}
        </h2>
        <Map markers={activeMarker} color={props.color} backend={backend} />
      </>
    ) : (
      <>
      <h1>
        No {backend} {backend != "hospital" && "donor"} registered ☹️
      </h1>
      </>
    )
  ) : (
    <>
    <h1>loading</h1>
    </>
  );
};

export default Maps;
