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

export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon style={{color: '#fff'}}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon style={{color: '#fff'}}>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color: '#fff'}}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Sent" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color: '#fff'}}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Company/Customers" />
    </ListItem>
    <ListItem >
      <ListItemIcon style={{color: '#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Privacy" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Team" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Email Signature" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Company Details" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Ticket" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: '#fff' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
      
  </div>
);


