import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import BasicTabs from './simpletab'
import "./Styles/mainpage.css";

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.key === 'Shift'){
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div><BasicTabs tabledetails={props.tabledetails} tabledetails2={props.tabledetails2} backend={props.backend}/></div>
      <button  className="detailsbutton1"  onClick={toggleDrawer(anchor, false)}>close</button>
    </Box>
  );
 let anchor="bottom"
  return (
    <div>
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)} className="detailsbutton" >Details</button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
 
    </div>
  );
}
