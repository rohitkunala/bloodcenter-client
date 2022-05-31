import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import MainHome from "./components/MainHome";
import FBF from "./components/FBF";
import MBF from "./components/MBF";
import BloodCenter from "./components/BloodCenter";
import All from "./components/All";

import Home from "./components/Home";
import SignUp from "./components/mui-components/SignUp";
import HospitalDemandForm from "./components/mui-components/HospitalDemandForm";
import { CustomizedTables as HospitalDemandTable } from "./components/mui-components/HospitalDemandTable";

import Maps from "./components/MainHome/Maps";

function App() {
  // const markerOptions = {
  //   markerDonors:{
  //     color:
  //   }
  // }

  const markerBloodcenter = [
    {
      id: 1,
      name: "vedayapalem",
      position: { lat: 14.4155, lng: 79.9587 },
    },
  ];

  const markerDonors = [
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
      id: 4,
      name: "Padarupalli",
      position: { lat: 14.3993, lng: 79.9626 },
    },
    {
      id: 5,
      name: "Kallurpalli Rural",
      position: { lat: 14.3804, lng: 79.9584 },
    },
    {
      id: 6,
      name: "Golagamudi",
      position: { lat: 14.3519, lng: 79.9759 },
    },
    {
      id: 7,
      name: "Kanuparthipadu",
      position: { lat: 14.3819, lng: 79.992 },
    },
    {
      id: 8,
      name: "Sportello Presto",
      position: { lat: 14.413671, lng: 79.982161 },
    },
    {
      id: 9,
      name: "Ambapuram",
      position: { lat: 14.4163, lng: 79.9221 },
    },
    {
      id: 10,
      name: "Akkacheruvupadu",
      position: { lat: 14.439, lng: 79.9165 },
    },
    {
      id: 11,
      name: "Ogurupadu",
      position: { lat: 14.433799, lng: 79.931733 },
    },
    {
      id: 12,
      name: "Vengalrao Nagar",
      position: { lat: 14.4172, lng: 79.9445 },
    },
    {
      id: 13,
      name: "Kottur",
      position: { lat: 14.4107, lng: 79.9438 },
    },
    {
      id: 14,
      name: "Ayyappa Swamy Temple",
      position: { lat: 14.403, lng: 79.95 },
    },
    {
      id: 15,
      name: "Ganga Bhavani Temple, Kanuparthipadu",
      position: { lat: 14.393288, lng: 79.982344 },
    },
  ];

  const markerHospitals = [
    {
      id: 1,
      name: "Vijaya Hospital, Pogathota",
      position: { lat: 14.449, lng: 79.9832 },
    },
    {
      id: 2,
      name: "KIMS Hospital, Ambedkar Nagar",
      position: { lat: 14.4344, lng: 79.9682 },
    },
    {
      id: 3,
      name: "Apollo Hospitals, Ramji Nagar",
      position: { lat: 14.4383, lng: 79.9926 },
    },
    {
      id: 4,
      name: "Narayana Hospital, Chinthareddy Palem",
      position: { lat: 14.4464, lng: 79.983 },
    },
    {
      id: 5,
      name: "Vijaya Care Hospital, Rama Murthy Palem",
      position: { lat: 14.452165, lng: 79.987839 },
    },
    {
      id: 6,
      name: "Rainbow Super Speciality Hospital, Brindavan Colony",
      position: { lat: 14.452, lng: 79.9859 },
    },
    {
      id: 7,
      name: "Simhapuri Hospital, Balaji Nagar",
      position: { lat: 14.4481, lng: 79.9953 },
    },
    {
      id: 8,
      name: "Lotus Hospital, Pogathota",
      position: { lat: 14.4486, lng: 79.9847 },
    },
    {
      id: 9,
      name: "St. Joseph Hospital, Santhapet",
      position: { lat: 14.457659, lng: 79.983007 },
    },
    {
      id: 10,
      name: "Jayabharath Hospital, Somasekhara Puram",
      position: { lat: 14.44503, lng: 79.983217 },
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fbf" element={<FBF />} />
        <Route path="/mbf" element={<MBF />} />
        <Route path="/bloodCenter" element={<BloodCenter />} />
        <Route path="/all" element={<All />} />

        <Route
          path="/maps"
          element={
            <>
              <Maps color="red" backend="fixed" />
              <Maps color="orange" backend="mobile" />
              <Maps color="blue" backend="hospital" />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hospitaldemand" element={<HospitalDemandForm />} />
        <Route path="/showhospitaldemand" element={<HospitalDemandTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
