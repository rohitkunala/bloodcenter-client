import React from "react";
import "./Styles/mainpage.css";
import Typed from "react-typed";
import BasicCard from "./purposeCard";
import Footer from "./footer";
import Button from "@mui/material/Button";
import SimpleAccordion from "./accordian";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import About from "./about";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: 5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const MainHome = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const donor_matter =
    "If you want to donate ,then you have to Register here , Just click donate and register ";
  const center_matter =
    " Details of donors under each category and hospitals details can be seen here .";
  const hospital_matter =
    " Register your hospital Demand and mention the requirement of all blood groups.";
  return (
    <>
      <div className="title">
        <img src={require("./Images/Logo.jpg")} alt="saving life" />
      </div>
      <Button
        variant="contained"
        style={{
          display: "relative",
          top: 40,
          left: 350,
          borderRadius: 35,
          backgroundColor: "#21b6ae",
          padding: "5px 9px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
        onClick={handleOpen}
      >
        About
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <About />
          <div style={{ fontSize: 40, width: "inherit", textAlign: "center" }}>
            <Button
              ariant="contained"
              style={{
                borderRadius: 35,
                backgroundColor: "#fb05159d",
                color: "white",
                padding: "5px 9px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Box>
        {/* <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p></Box> */}
      </Modal>

      <Button
        variant="contained"
        style={{
          display: "relative",
          top: 40,
          left: 400,
          borderRadius: 35,
          backgroundColor: "#21b6ae",
          padding: "5px 9px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Maps for users
      </Button>

      <div className="texttyping">
        Save{" "}
        <span className="animated-typing">
          <Typed
            strings={["Life", "Hope", "Person", "Family"]}
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
        <div className="quotetag">
          Small donation huge impact
          <br />A decision to donate your blood can save a life
        </div>
      </div>

      <img
        className="blob1"
        src={require("./Images/blob1.png")}
        alt="saving life"

      />

      <img
        className="img3"
        src={require("./Images/img3.png")}
        alt="saving life"
      />
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
      <div className="quotetag2">
        Blood is the most precious gift that anyone can give to another person
        the gift of life. A decision to donate your blood can save a life, or
        even several if your blood is separated into its components – red cells,
        platelets and plasma – which can be used individually for patients with
        specific conditions.
      </div>
      <div className="cardbound">
        <span>Based on your category choose one</span>
        <div className="cards">
          <div className="cardItem">
            {" "}
            <BasicCard
              details={{
                matter: donor_matter,
                name: "Donate",
                title: "Donors",
                url: "/signup",
              }}
            />
          </div>
          <div className="cardItem">
            {" "}
            <BasicCard
              details={{
                matter: center_matter,
                name: "Center",
                title: "Center Details",
                url: "/home",
              }}
            />
          </div>
          <div className="cardItem">
            {" "}
            <BasicCard
              details={{
                matter: hospital_matter,
                name: "Register",
                title: "Hospitals",
                url: "/hospitaldemand",
              }}
            />
          </div>
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
          OfferLife helps in managing donors and blood centers , collects blood
          and provides hospitals in getting required amount of blood
        </p>
      </div>
      <img
        className="img2"
        src={require("./Images/img2.png")}
        alt="saving life"
      />
      <div className="quote3">Safe blood saves lives</div>
      <div
        class="faqs"
        style={{
          color: "#069A8E",
          textAlign: "center",
          fontFamily: `"Rokkitt", "serif"`,
          fontSize: 40,
          width: 1000,
          backgroundColor: "#16e2d127",
          padding: 70,
        }}
      >
        FAQ's
        <SimpleAccordion />
      </div>
      <Footer />
    </>
  );
};
export default MainHome;
