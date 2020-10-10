import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'
import '../listItems.css'

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { List, makeStyles } from '@material-ui/core';
import WcIcon from '@material-ui/icons/Wc';
import ReportIcon from '@material-ui/icons/Report';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import HttpsIcon from '@material-ui/icons/Https';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import BusinessIcon from '@material-ui/icons/Business';
import BugReportIcon from '@material-ui/icons/BugReport';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const componseStyle = {
    backgroundColor: '#4195D1',
    width: '65%',
    textAlign: 'center',
    padding: '0.2rem 0rem',
    margin: '1rem auto',
}

const MenuItem = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div >
            <div >
                
            </div>
            <div style={{ height:'100ch'}}>
                
                <Link to="/compose">
                    <ListItem button>
                        <ListItemIcon>
                            <MarkunreadMailboxIcon />
                        </ListItemIcon>
                        <ListItemText style={componseStyle} primary="Compose" />
                    </ListItem>
                </Link>

                <Link to="/inbox">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                </Link>


                <Link to="/customers">
                    <ListItem button>
                        <ListItemIcon>
                            <WcIcon />
                        </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItem>
                </Link>


                <Link to="/sent">
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent" />
                    </ListItem>
                </Link>


                <Link >
                    <ListItem button>
                        <ListItemIcon>
                            <ReportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Report" />
                    </ListItem>
                </Link>

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link to="/profile">
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItem>
                        </Link>
                        <Link to="/privacy">
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <HttpsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Privacy" />
                            </ListItem>
                        </Link>

                        <Link to="/team">
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <GroupWorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Team" />
                            </ListItem>
                        </Link>

                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <LabelImportantIcon />
                            </ListItemIcon>
                            <ListItemText primary="Email Signature" />
                        </ListItem>

                        <Link to="/companydetails">
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <BusinessIcon />
                                </ListItemIcon>
                                <ListItemText primary="Company Details" />
                            </ListItem>    
                        </Link>

                        
                    </List>
                </Collapse>

                <ListItem button>
                    <ListItemIcon>
                        <BugReportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ticket" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItem>
                </Link>
            </div>

        </div>
    );
};

export default MenuItem;