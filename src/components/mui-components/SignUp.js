import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
 import { ThemeProvider,createTheme } from "@mui/material/styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";



import "./styles.css"
import axios from "axios";
import { useFormContext, Controller } from "react-hook-form";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <NavLink color="inherit" to="/">
        HomePage
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const theme = createTheme();
const theme = createTheme({
  typography: {
  //  "fontFamily":`"Lobster Two", "cursive"`,
  "fontFamily": `"Rokkitt", "serif"`,
   "fontSize":20
  }
});

export default function SignUp() {

  const [bg, setBg] = useState("");
  const [radio, setRadio] = useState("fixed");

  // const { control } = useFormContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const donor = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      age: data.get("age"),
      bloodGroup: bg,
      location: data.get("location"),
      mobile: data.get("mobile"),
      facilityCenter: radio,
    };
    console.log(donor);
    const requestOptions = {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(donor),
    };
    axios
      .post("http://localhost:5000/", requestOptions)
      .then((response) => {
        console.log("flask response : ", JSON.parse(response.data));
      })
      .catch((data) => console.log(data));
    // fetch('http://localhost:5000/', {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(donor),
    // }).then((response) => console.log(response.json())).catch((error) => console.log(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="formWrap">
      <Container component="main" maxWidth="sm">
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
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="age" label="Age" name="age" />
              </Grid>
              <Grid item xs={12} sm={6} required>
                <InputLabel htmlFor="searchCriteria">Blood Group *</InputLabel>
                <Select
                  required
                  fullWidth
                  onChange={(e) => setBg(e.target.value)}
                  input={<Input name="searchCriteria" id="searchCriteria" />}
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
                  id="location"
                  label="Full Address"
                  name="location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-error-radios">Facility Center</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-error-radios"
                  name="faciityChoice"
                  defaultValue={radio}
                  value={radio}
                  onChange={(e) => setRadio(e.target.value)}
                >
                  <FormControlLabel
                    value="fixed"
                    control={<Radio selected />}
                    label="Fixed Facility Center"
                  />
                  <FormControlLabel
                    value="mobile"
                    control={<Radio />}
                    label="Mobile Facility Center"
                  />
                  <FormControlLabel
                    value="bloodcenter"
                    control={<Radio />}
                    label="BloodCenter"
                  />
                </RadioGroup>
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
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
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      </div>
      <div className="content">
        You are <b>Here</b> <br/>
         you <b>Already</b> saved a life 
     <img
        style={{width:500,height:400}}
        src={require("./../MainHome/Images/doner_form.png")}
        alt="saving life"
      />
      </div>
    </ThemeProvider>
  );
}
