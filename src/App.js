import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import FBF from "./components/FBF";
import MBF from "./components/MBF";
import BloodCenter from "./components/BloodCenter";
import All from "./components/All";

import Home from "./components/Home";
import SignUp from "./components/mui-components/SignUp";
import HospitalDemandForm from "./components/mui-components/HospitalDemandForm";
import { CustomizedTables as HospitalDemandTable}  from "./components/mui-components/HospitalDemandTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fbf" element={<FBF />} />
        <Route path="/mbf" element={<MBF />} />
        <Route path="/bloodCenter" element={<BloodCenter />} />
        <Route path="/all" element={<All />} />

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
