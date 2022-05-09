// import Avatar from "@mui/material/Avatar";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlinedIcon"
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme();


const HospitalDemandForm = () => {
  const [bg, setBg] = useState("");
  const [radio, setRadio] = useState("fixed");

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
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5" color="red">
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
                <InputLabel htmlFor="searchHospital">Hospital Name & Location *</InputLabel>
                <Select
                  required
                  fullWidth
                  onChange={(e) => setBg(e.target.value)}
                  input={<Input name="searchHospital" id="searchHospital" />}
                  value={bg}
                >
                  <MenuItem value="h1">H1</MenuItem>
                  <MenuItem value="h2">H2</MenuItem>
                  <MenuItem value="h3">H3</MenuItem>
                  <MenuItem value="h4">H4</MenuItem>
                  <MenuItem value="h5">H5</MenuItem>
                  <MenuItem value="h6">H6</MenuItem>
                  <MenuItem value="h7">H7</MenuItem>
                  <MenuItem value="h8">H8</MenuItem>
                  <MenuItem value="h9">H9</MenuItem>
                  <MenuItem value="h10">H10</MenuItem>
                </Select>
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
                  <MenuItem value="O-">O+</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                />
              </Grid>
              
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
export default HospitalDemandForm;