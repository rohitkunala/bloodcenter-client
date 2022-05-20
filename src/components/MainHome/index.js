import React from "react";
import "./Styles/mainpage.css";
import Typed from "react-typed";
import BasicCard from "./purposeCard";
import Footer from "./footer";
import Button from '@mui/material/Button';
import SimpleAccordion from "./accordian";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const MainHome = () => {
  const donor_matter="If you want to donate the you have to register yourself under any of 2 catergories."
  const center_matter=" Details of donars under each category can be seen and also hospitals details."
  const hospital_matter=" Register your hospital and mention the requirement of all blood groups."
  return (
    <>
      <div className="title">
        <img src={require("./Images/Logo.jpg")} alt="saving life" />
      </div>
      <Button variant="contained" style={{
        display:"relative",
        top:40,
        left:350,
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "5px 9px",
        fontSize: "18px",
        fontWeight:"bold"
    }} >About</Button>
      <Button variant="contained" style={{
        display:"relative",
        top:40,
        left:400,
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "5px 9px",
        fontSize: "18px",
        fontWeight:"bold"
    }} >Maps for users</Button>

      <div className="texttyping">
           Save{" "}
        <span className="animated-typing">
          <Typed
            strings={[
              "Life",
              "Hope",
              "Family",
            ]}
            startDelay={500}
            typeSpeed={150}
            backSpeed={150}
            // cursorChar="🩸"
            // cursorChar="💚"
             cursorChar="♥️"
            // fadeOut={true}
            // showCursor={false}
            loop
          />
        </span>
      <div className="quotetag">Small donation huge impact</div>
      </div>

      <img
        className="blob1"
        src={require("./Images/blob1.png")}
        alt="saving life"
      />

      <img className="img3" src={require("./Images/img3.png")} alt="saving life" />
      <img className="img1" src={require("./Images/2.png")} alt="saving life" />
      {/* <img
        className="blob3"
        src={require("./Images/blob3.png")}
        alt="saving life"
      /> */}
       <img
        className="img5"
        src={require("./Images/img5.png")}
        alt="saving life"
      />
      <div className="cardbound">
      <span>
          Based on your category choose one
          </span>
      <div className="cards">
         <div className="cardItem"> <BasicCard details={{matter:donor_matter,name:"Donate",title:"Doners",url:"/signup"}}/></div>
         <div className="cardItem"> <BasicCard details={{matter:center_matter,name:"Center" ,title:"Center Details",url:"/home"}}/></div>
         <div className="cardItem"> <BasicCard details={{matter:hospital_matter,name:"Register",title:"Hospitals",url:"/hospitaldemand"}}/></div>  
      </div>
      </div>
      <img
        className="blob2"
        src={require("./Images/blob2.png")}
        alt="saving life"
      />
      <div class="details">
          <VolunteerActivismIcon style={{ fontSize: 70 }} />
          <p>
          OfferLife helps in managing donors and blood centers , collects blood and provides hospitals in getting required amount of blood 
          </p>
      </div>
      <div class="faqs"><SimpleAccordion/></div>
      <img
        className="img2"
        src={require("./Images/img2.png")}
        alt="saving life"
      />
      
      <Footer/>
    </>
  );
};
export default MainHome;
