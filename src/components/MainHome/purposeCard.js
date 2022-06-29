import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { fontWeight } from '@mui/system';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { NavLink } from "react-router-dom";

export default function BasicCard(props) {
  var img=`avatar_${props.details.name}.jpg`
  var url="./Images/"+img
  var donate=false
  var center=false
  var reg=false
  console.log(url)
  var icon
  if (props.details.name=="Donate"){
    donate=true
    icon=<BloodtypeIcon />
  }
  if(props.details.name=="Center"){
      center=true
      icon=<DomainAddIcon/>
  }
  if(props.details.name=="Register"){
      reg=true
      icon=<HowToRegIcon/>
  }
  
  return (
    
    <Card sx={{ maxWidth: 400 }}>
      <CardContent style={{backgroundColor: "#43e7d9f4"}}>
      <Grid container justify="center">
      {center && <Avatar alt={props.details.name} src={require("./Images/avatar_Center.jpg")}  sx={{ width: 150, height: 150 }}/>}
      {donate && <Avatar alt={props.details.name} src={require("./Images/avatar_Donate.jpg")}   sx={{ width: 150, height: 150 }}/>}
      {reg && <Avatar alt={props.details.name} src={require("./Images/avatar_Register.jpeg")}   sx={{ width: 150, height: 150 }}/>}
      </Grid>
      <Grid style={{fontSize: 24}}> {props.details.title} </Grid>
      <Grid container justify="center">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.details.matter}
        </Typography>
        </Grid>
        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
        <Grid container justify="center">
        <NavLink to={props.details.url} style={{textDecoration: 'none'}}>
        <Button variant="contained" style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "10px 18px",
        fontSize: "18px",
        fontWeight:"bold"
    }} 
    endIcon={icon}>{props.details.name}</Button>
        </NavLink>
    </Grid>
      </CardContent>
    </Card>

  );
}
