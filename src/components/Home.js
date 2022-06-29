import { ActionAreaCard } from "./mui-components/ActionAreaCard";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import All from "./All"
import React from "react";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CustomizedTables } from "./mui-components/HospitalDemandTable";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius:5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Home = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <header className="App-header" style={{ position: "absolute" }}> */}
        <h1>
          <div style={{textAlign:"center",fontSize:40,color:"#069A8E"}}>Blood Center <VaccinesIcon fontSize="70"/></div>
          {/* <span style={{ float: "right", paddingRight: 50 }}>
            <NavLink to="/signup">
              <Button size="large" variant="contained" color="success">
                New Donor Registration
              </Button>
            </NavLink>
          </span>
          <div style={{ float: "left", paddingLeft: 50 }}>
            <div>
              <NavLink to="/hospitaldemand">
                <Button size="large" variant="contained" color="success">
                  New Hospital Demand
                </Button>
              </NavLink>
            </div>
            <div> 
              <NavLink to="/showhospitaldemand">
                <Button size="large" variant="contained" color="success">
                  show Hospital Demand
                </Button>
              </NavLink>
            </div>
          </div>*/}
        </h1>
        <div> 

              {/* <NavLink to="/showhospitaldemand" style={{textDecoration:'none'}}> */}
  
                <Button size="large" variant="contained"  onClick={handleOpen} style={{ borderRadius: 35,
        backgroundColor: "#fb05159d",
        color:"white",
        padding: "5px 9px",
        fontSize: "15px",
        fontWeight:"bold",position:"relative",top:1,left:1000}}>
                  show Hospital Demand
                </Button>
           
              {/* </NavLink> */}
            </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
     
       <Box sx={{ ...style }}>
       <CustomizedTables/>
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
        <img
        style={{position:"relative",top:35,left:150}}
        src={require("./MainHome/Images/blooddrop.png")}
        alt="saving life"
      />
        <div style={{ paddingLeft: 50, paddingTop: 120, float: "left", display: "flex" ,position:"relative",bottom:200,left:10}}>
          <div style={{ paddingLeft: 40}}>
          <span style={{padding:20}}>
            <ActionAreaCard title="Fixed" />
          </span>
          <span style={{padding:20}}>
            <ActionAreaCard title="Blood Center" />
          </span>
          </div>
          <div style={{ paddingLeft: 40}}>
          <span style={{padding:20}}>
            <ActionAreaCard title="Mobile" />
          </span>
          <span style={{padding:20}}>
            <ActionAreaCard title="All Details" />
          </span>
          </div>
        </div>
      {/* </header> */}
    </div>
  );
};
export default Home;
