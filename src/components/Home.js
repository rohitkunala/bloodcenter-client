import { ActionAreaCard } from "./mui-components/ActionAreaCard";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="App-header" style={{ position: "absolute" }}>
        <h1>
          BloodCenter
          <span style={{ float: "right", paddingRight: 50 }}>
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
          </div>
        </h1>
        <div style={{ paddingLeft: 0, paddingTop: 150, float: "left", display: "flex"}}>
          <span >
            <ActionAreaCard title="Fixed" />
          </span>
          <span >
            <ActionAreaCard title="Blood Center" />
          </span>
          <span >
            <ActionAreaCard title="Mobile" />
          </span>
        </div>
      </header>
    </div>
  );
};
export default Home;
