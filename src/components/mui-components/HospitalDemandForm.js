// import Avatar from "@mui/material/Avatar";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlinedIcon"
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./styles.css"
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const theme = createTheme({
  typography: {
  //  "fontFamily":`"Lobster Two", "cursive"`,
  "fontFamily": `"Rokkitt", "serif"`,
   "fontSize":20
  }
});

const HospitalDemandForm = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  } 
  useEffect(() => {
    onTop()
  }, [routePath]);
  const [bg, setBg] = useState("");
  const [hospital, setHospital] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const hospitalDemand = {
      hospitalName: data.get("searchHospital"),
      age: data.get("age"),
      bloodgroup: data.get("searchBloodgroup"),
      quantity: data.get("quantity"),
    };
    const requestOptions = {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(hospitalDemand),
    };
    axios
      .post("http://localhost:5000/hospitalDemand", requestOptions)
      .then((response) => {
        console.log("flask response : ", JSON.parse(response.data));
      })
      .catch((data) => console.log(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="formWrap">
      <Container component="main" maxWidth="sm">
        <br/>
        <br/>
        <br/>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5" color="#069A8E">
            Register a New Hospital Demand
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} required>
                <InputLabel htmlFor="searchHospital">
                  Hospital Name & Location *
                </InputLabel>
                <Select
                  required
                  fullWidth
                  onChange={(e) => setHospital(e.target.value)}
                  input={<Input name="searchHospital" id="searchHospital" />}
                  value={hospital}
                >
                  {/* <MenuItem value="h1">H1</MenuItem>
                  <MenuItem value="h2">H2</MenuItem>
                  <MenuItem value="h3">H3</MenuItem>
                  <MenuItem value="h4">H4</MenuItem>
                  <MenuItem value="h5">H5</MenuItem>
                  <MenuItem value="h6">H6</MenuItem>
                  <MenuItem value="h7">H7</MenuItem>
                  <MenuItem value="h8">H8</MenuItem>
                  <MenuItem value="h9">H9</MenuItem>
                  <MenuItem value="h10">H10</MenuItem> */}
                  <MenuItem value="Vijaya Hospital, Pogathota">Vijaya Hospital, Pogathota</MenuItem>
<MenuItem value="KIMS Hospital, Ambedkar Nagar">KIMS Hospital, Ambedkar Nagar</MenuItem>
<MenuItem value="Apollo Hospitals, Ramji Nagar">Apollo Hospitals, Ramji Nagar</MenuItem>
<MenuItem value="Narayana Hospital, Chinthareddy Palem">Narayana Hospital, Chinthareddy Palem</MenuItem>
<MenuItem value="Vijaya Care Hospital, Rama Murthy Palem">Vijaya Care Hospital, Rama Murthy Palem</MenuItem>
<MenuItem value="Rainbow Super Speciality Hospital, Brindavan Colony">Rainbow Super Speciality Hospital, Brindavan Colony</MenuItem>
<MenuItem value="Simhapuri Hospital, Balaji Nagar">Simhapuri Hospital, Balaji Nagar</MenuItem>
<MenuItem value="Lotus Hospital, Pogathota">Lotus Hospital, Pogathota</MenuItem>
<MenuItem value="St. Joseph Hospital, Santhapet">St. Joseph Hospital, Santhapet</MenuItem>
<MenuItem value="Jayabharath Hospital, Somasekhara Puram">Jayabharath Hospital, Somasekhara Puram</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="age" label="Age" name="age" />
              </Grid>
              <Grid item xs={12} sm={6} required>
                <InputLabel htmlFor="searchBloodgroup">
                  Blood Group *
                </InputLabel>
                <Select
                  required
                  fullWidth
                  onChange={(e) => setBg(e.target.value)}
                  input={
                    <Input name="searchBloodgroup" id="searchBloodgroup" />
                  }
                  value={bg}
                >
                  {/* <MenuItem value="Select a Blood Group" selected disabled>
                    Select a Blood Group
                  </MenuItem> */}
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity in mL"
                  name="quantity"
                />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  borderRadius: 35,
                  backgroundColor: "#21b6ae",
                  padding: "10px 18px",
                  fontSize: "25px",
                  fontWeight:"100"}}
              >
                Register
              </Button>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
      </div>
      <div className="content1">
        Register hospital <br/>  get the required demand in <b>TIME</b> 
        {" "}
     <img
        style={{width:500,height:450,padding:3,margin:3}}
        src={require("./../MainHome/Images/hospital_form.png")}
        alt="saving life"
      />
      </div>
    </ThemeProvider>
  );
};
export default HospitalDemandForm;
