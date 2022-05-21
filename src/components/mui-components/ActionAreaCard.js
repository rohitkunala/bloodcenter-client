import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";
import { color } from "@mui/system";
import { Button } from "@mui/material";
import "./styles.css"
import FBF from "../FBF";
import MBF from "../MBF"; 
import All from "../All"
import BloodCenter from "../BloodCenter";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";


/*
isTitleMobile : 0   Fixed
isTitleMobile : 1   Mobile
isTitleMobile : 2   Blood Center
isTitleMobile : 3   All
*/
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "90%",
  maxHeight:"80%",
  overflowY:"scroll",
  overflowX:"none",
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius:5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export function ActionAreaCard({ title }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  var mbf=false
  var fbf=false
  var bc=false
  var all=false
  if(title.includes("Mobile")){
    var isTitleMobile = 1
    var gotoURL = "/mbf"
    mbf=true
  }

  else if(title.includes("Fixed")){
    var isTitleMobile = 0
    var gotoURL = "/fbf"
    fbf=true
  }

  else if(title.includes("Blood Center")){
    var isTitleMobile = 2
    var gotoURL = "/bloodcenter"
    bc=true
  }

  else{
    all=true
    var isTitleMobile = 3
    var gotoURL = "/all"
  }

  const imgDivstyle = { width: 230, height: 150};

  const imgStyle = {
    height: 160,
    width: 300,
    // paddingLeft: 40,
    // paddingRight:10,
    marginBottom: 5,
  };
  const imgStyle1 = {
    height: 160,
    width: 300,
    // paddingLeft: 10,
    marginBottom: 5,
    // marginTop:6,
  };
  const imgStyle2 = {
    height: 160,
    width: 300,
    // paddingLeft: 40,
    marginBottom: 5,
    // marginTop:6,
  };

  const imgURL = isTitleMobile
    ? "https://cdn-icons-png.flaticon.com/512/3487/3487352.png"
    : " ../MainHome/Images/van.png";

  const imgDesc = isTitleMobile
  ? "Mobile Blood Facility ensures to reach out to each and every donor."
  : "Fixed Blood Facility , a donor must reach himself here and donate blood."
  const desc1="Fixed Blood Facility , a donor must reach himself here and donate blood"
  const desc2="Mobile Blood Facility ensures to reach out to each and every donor."
  const desc3="Blood center is where all collected blood will be stored and distributed to hospitals in need."
  const desc4="Details of all donors and available blood in the center. Both MBF collect and FBF collect details."
  return (
   
    <Card sx={{ maxWidth: 300 ,color:"#069A8E",backgroundColor:"#16e2d127", margin:0}} >
      <CardActionArea>
        <CardMedia height="160" alt="green iguana">
          <div style={imgDivstyle}>
           
            {mbf&& <img src={require("../MainHome/Images/mbf.jpg")} style={imgStyle} />}
            {fbf&&<img src={require("../MainHome/Images/fbf.jpg")} style={imgStyle1} />}
            {bc&&<img src={require("../MainHome/Images/blood-center-donors.jpg")} style={imgStyle2} />}
            {all&&<img src={require("../MainHome/Images/blood-bank.jpg")} style={imgStyle2} />}
          </div>
        </CardMedia>
        <CardContent>
          <div style={{fontSize:40,width:"inherit",textAlign:"center"}}>
            {title}
          </div>
          {fbf && <Typography variant="body2" color="text.secondary" >
            {desc1}
          </Typography>}
          {mbf && <Typography variant="body2" color="text.secondary" >
            {desc2}
          </Typography>}
          {bc && <Typography variant="body2" color="text.secondary" >
            {desc3}
          </Typography>}
          {all && <Typography variant="body2" color="text.secondary" >
            {desc4}
          </Typography>}
          <React.Fragment>
          <div style={{fontSize:40,width:"inherit",textAlign:"center"}}>
          {/* <NavLink to={gotoURL} style={{textDecoration: "None"}} > */}
      
          <Button variant="contained" style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "5px 9px",
        fontSize: "15px",
        fontWeight:"bold"
    }} 
    onClick={handleOpen}
  >View Details</Button>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
     
       <Box sx={{ ...style }}>
        {mbf&& <MBF/>}
       {fbf&& <FBF/>}
       {bc&& <BloodCenter/>}
       {all&& <All/>}
       <div style={{fontSize:40,width:"inherit",textAlign:"center"}}>
       <Button ariant="contained" style={{
        borderRadius: 35,
        backgroundColor: "#fb05159d",
        color:"white",
        padding: "5px 9px",
        fontSize: "15px",
        fontWeight:"bold"
    }} onClick={handleClose}>Close</Button></div>
          </Box>
           {/* <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p></Box> */}
      </Modal>
  {/* </NavLink> */}
  </div>
  </React.Fragment>
  
        </CardContent>
      </CardActionArea>
    </Card>
    
    
  );
}
