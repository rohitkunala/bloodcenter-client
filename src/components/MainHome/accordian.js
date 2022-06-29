import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>Is blood donation safe ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Blood donation is safe. New, sterile disposable equipment is used
            for each donor, so there's no risk of contracting a bloodborne
            infection by donating blood. If you're a healthy adult, you can
            usually donate a pint (about half a liter) of blood without
            endangering your health.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>
            How many facility types are there for donating the blood ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are two types of facilities for blood donation. 1. Mobile
            Blood Facility 2. Fixed Blood Facility In addition to this, a donor
            can donate blood directly at blood center and hospital
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>What is Fixed Blood Facility ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In Fixed Blood Facility ( FBF ) the donors visit the blood facility
            center and donate the blood and a transportation vehicle is used to
            deposit the blood in blood center
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>What is Mobile Blood Facility ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In Mobile Blood Facility ( MBF ) the blood transportation vehicles
            collect the blood from the donor locations as per the blood
            requirement and deposit them to blood center
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>What is the minimum age for blood donation ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For a donor to donate the blood the age should be between 18 and 65.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>
            What are the methods available for collecting blood from donor ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Platelets can be collected from a donor by two different methods. 1.
            Traditional method 2. Apheresis method
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>
            What is traditional method in collecting blood ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In traditional method, whole blood is drawn from the donor and then
            platelets are separated from other blood components within five
            hours of the donation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>What is Apheresis Method ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In this method the other blood components are returned to the
            donor’s body immediately after isolating and collecting the
            platelets. This is a time saving method
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>How often can I donate blood? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If the blood is donated in traditional method, then you can donate
            the blood after 56 days. If the blood is donated in Apheresis
            method, then you can donate the blood for every 7 days.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#069a8e49",
          }}
        >
          <Typography>Who are eligible to donate blood ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donors must be in good health at the time they donate. Donors cannot
            donate if they have a cold, flu, sore throat, cold sore, stomach bug
            or any other infection. If donors recently had a tattoo or body
            piercing they cannot donate for 6 months from the date of the
            procedure
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
