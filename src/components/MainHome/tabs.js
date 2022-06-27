import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Styles/mainpage.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import AirportShuttleTwoToneIcon from '@mui/icons-material/AirportShuttleTwoTone';
import Maps from "./Maps";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const theme = createTheme({
  typography: {
    //  "fontFamily":`"Lobster Two", "cursive"`,
    fontFamily: `"Rokkitt", "serif"`,
    fontSize: 20,
  },
  palette: {
    primary: {
      main: '#21b6ae',
      darker: '#21b6ae'
      //'#053e85',
    },
    // neutral: {
    //   main: '#64748B',
    //   contrastText: '#fff',
    // },
  }, 
});
export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("newValue ",newValue)
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='mapheading'>MAPS</div>
    <Box
      sx={{ flexGrow: 2, bgcolor: 'background.paper', display: 'flex', height: "100vh"}}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab icon={<AddLocationAltTwoToneIcon/>} label="FBF" iconPosition='end' {...a11yProps(0)} />
        <Tab icon={<AirportShuttleTwoToneIcon/>} label="MBF" iconPosition='end' {...a11yProps(1)} />
        <Tab icon={<HealthAndSafetyTwoToneIcon/>}  label="Hospitals " iconPosition='end'  {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
         <span>
              {/* <TemporaryDrawer/> */}
              <Maps color="red" backend="fixed" />
         </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Maps color="orange" backend="mobile" />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Maps color="blue" backend="hospital" />
      </TabPanel>
    </Box>
    </ThemeProvider>
  );
}
