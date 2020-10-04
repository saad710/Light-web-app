import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom'
import './listItems.css'
const componseStyle = {
  backgroundColor: '#4195D1',
  width: '65%',
  textAlign: 'center',
  padding: '0.2rem 0rem',
  margin: '1rem auto',
}

export const mainListItems = (
  <div >
    <div >
      <ListItem button style={componseStyle} >
        {/* <ListItemIcon style={{color: '#fff'}}>
        <ShoppingCartIcon />
      </ListItemIcon> */}
        <ListItemText  primary="Compose" />
      </ListItem>
    </div>
    <div style={{ marginLeft: '1rem' }}>
      <Link to="/inbox">
        <ListItem button>
          {/* <ListItemIcon style={{color: '#fff'}}>
          <DashboardIcon />
        </ListItemIcon> */}
          <ListItemText primary="Inbox" />
        </ListItem>
      </Link>
      <Link to="/contact">
        <ListItem button>
        {/* <ListItemIcon style={{color: '#fff'}}>
        <ShoppingCartIcon />
      </ListItemIcon> */}
        <ListItemText primary="Contact" />
      </ListItem>
      </Link>
      <ListItem button>
        {/* <ListItemIcon style={{color: '#fff'}}>
        <PeopleIcon />
      </ListItemIcon> */}
        <ListItemText primary="Sent" />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon style={{color: '#fff'}}>
        <BarChartIcon />
      </ListItemIcon> */}
        <ListItemText primary="Company/Customers" />
      </ListItem>
      <ListItem >
        {/* <ListItemIcon style={{color: '#fff'}}>
        <LayersIcon />
      </ListItemIcon> */}
        <ListItemText primary="Setting" />
      </ListItem>
      <div style={{ marginLeft: '1rem' }}>
        <ListItem button>
          {/* <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon> */}
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon> */}
          <ListItemText primary="Privacy" />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon> */}
          <ListItemText primary="Team" />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon> */}
          <ListItemText primary="Email Signature" />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon> */}
          <ListItemText primary="Company Details" />
        </ListItem>
      </div>
      <ListItem button>
        {/* <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon> */}
        <ListItemText primary="Ticket" />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon> */}
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon> */}
        <ListItemText primary="Log Out" />
      </ListItem>
    </div>
      
  </div>
);


