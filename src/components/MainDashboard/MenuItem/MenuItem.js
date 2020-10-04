import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'
import '../listItems.css'

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { List, makeStyles } from '@material-ui/core';

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
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div >
            <div >
                <ListItem button style={componseStyle} >
                    <ListItemText primary="Compose" />
                </ListItem>
            </div>
            <div style={{ marginLeft: '1rem' }}>

                <Link to="/inbox">
                    <ListItem button>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                </Link>


                <Link to="/contact">
                    <ListItem button>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </Link>


                <Link to="/sent">
                    <ListItem button>
                        <ListItemText primary="Sent" />
                    </ListItem>
                </Link>


                <Link to="/customers">
                    <ListItem button>
                        <ListItemText primary="Company/Customers" />
                    </ListItem>
                </Link>


                <ListItem >
                    <ListItemText primary="Setting" />
                </ListItem>

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>

                <div style={{ marginLeft: '1rem' }}>
                    <ListItem button>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Privacy" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Team" />
                    </ListItem>
                    <ListItem button>

                        <ListItemText primary="Email Signature" />
                    </ListItem>
                    <ListItem button>

                        <ListItemText primary="Company Details" />
                    </ListItem>
                </div>


                <ListItem button>
                    <ListItemText primary="Ticket" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Log Out" />
                </ListItem>
            </div>

        </div>
    );
};

export default MenuItem;