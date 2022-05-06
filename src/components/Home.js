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
        </h1>
        <span style={{ paddingLeft: 100, paddingTop: 150, float: "left" }}>
          <ActionAreaCard title="Fixed" />
        </span>
        <span style={{ paddingLeft: 170, paddingTop: 150, float: "left" }}>
          <ActionAreaCard title="Blood Center" />
        </span>
        <span style={{ paddingRight: 100, paddingTop: 150, float: "right" }}>
          <ActionAreaCard title="Mobile" />
        </span>
      </header>
    </div>
  );
};
export default Home;
