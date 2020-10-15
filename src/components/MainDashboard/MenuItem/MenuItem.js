import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Backdrop, Button, Card, CardContent, CardHeader, Fade, IconButton, List, makeStyles, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import WcIcon from '@material-ui/icons/Wc';
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
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import './MenuItem.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    form: {
        textAlign: 'start',
        marginTop: '-2rem',
        marginBottom: '0',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    ticketBtn: {
        background: 'none',
        border: '1px solid gray',
        color: '#2d2d2d',
        margin: '0.5rem 0'
    },
    ticketCard: {
        width: '20rem',
        height: '70vh',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'none',
        boxShadow: 'none',
        margin: '5rem auto'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        color: "#fff",
        fontSize: "0.85em",
        minHeight: 40,
        "&:hover, &:focus": {
            backgroundColor: "#2d2d2d",
        },
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
    const [ticketModal, setTicketModal] = React.useState(false);
    const [ticketValue, setTicketValue] = useState({})

    console.log(ticketValue);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleOpen = () => {
        setTicketModal(true);
    };
    const handleClose = () => {
        setTicketModal(false);
    };
    const handleBlur = (e) => {
        const value = { ...ticketValue }
        value[e.target.name] = e.target.value
        setTicketValue(value)
    }

    const handleSubmit = (e) => {
        const finalValue = {...ticketValue}
        console.log(finalValue);
        e.preventDefault();
        
    }
    return (
        <div >
            <div style={{ height:'100ch'}}>
                
                <Link to="/compose">
                    <div style={{width: '60%', margin: '0 auto'}}>
                        <ListItem button>
                            {/* <ListItemIcon>
                            <MarkunreadMailboxIcon />
                        </ListItemIcon> */}
                            <ListItemText style={componseStyle} primary="Compose" />
                        </ListItem>
                    </div>
                </Link>

                <Link to="/inbox">
                    <ListItem button className={classes.listItem}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                </Link>


                <Link to="/customers">
                    <ListItem button className={classes.listItem}>
                        <ListItemIcon>
                            <WcIcon />
                        </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItem>
                </Link>


                <Link to="/sent">
                    <ListItem button className={classes.listItem}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent" />
                    </ListItem>
                </Link>


                {/* <Link >
                    <ListItem button>
                        <ListItemIcon>
                            <ReportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Report" />
                    </ListItem>
                </Link> */}

                <ListItem button onClick={handleClick} className={classes.listItem}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit className={classes.collapse}>
                    <List component="div" disablePadding>
                        <Link to="/profile">
                            <ListItem button  className={classes.listItem}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItem>
                        </Link>
                        <Link to="/privacy">
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon>
                                    <HttpsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Privacy" />
                            </ListItem>
                        </Link>

                        <Link to="/team">
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon>
                                    <GroupWorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Team" />
                            </ListItem>
                        </Link>

                        <Link to="/email-signature">
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon>
                                    <LabelImportantIcon />
                                </ListItemIcon>
                                <ListItemText primary="Email Signature" />
                            </ListItem>
                        </Link>

                        <Link to="/companydetails">
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon>
                                    <BusinessIcon />
                                </ListItemIcon>
                                <ListItemText primary="Company Details" />
                            </ListItem>    
                        </Link>

                        
                    </List>
                </Collapse>

                <ListItem onClick={handleOpen}  button className={classes.listItem}>
                    <div className="d-flex">
                            <ListItemIcon>
                                <BugReportIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ticket" />
                    </div>
                </ListItem>
                
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>

                <Link to="/">
                    <ListItem button className={classes.listItem}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItem>
                </Link>
            </div>

            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={ticketModal}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={ticketModal}>
                        <div className={classes.modalPaper}>
                            <div className="mt-3">
                                <Card className={classes.ticketCard}>
                                    <CardHeader
                                        action={
                                            <IconButton onClick={handleClose} aria-label="settings" style={{ color: '#2d2d2d' }}>
                                                <CancelOutlinedIcon />
                                            </IconButton>

                                        }
                                    />
                                    <CardContent>
                                        <form className={classes.form} noValidate>
                                            <div style={{ margin: '1rem 0' }}>
                                                <TextField
                                                    style={{ backgroundColor: '#fff' }}
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="name"
                                                    name="name"
                                                    autoComplete="name"
                                                    autoFocus
                                                    placeholder="Marie Winter"
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    style={{ backgroundColor: '#fff' }}
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    name="email"
                                                    autoComplete="email"
                                                    autoFocus
                                                    placeholder="user@email.com"
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            <div className="mt-3">
                                                <TextareaAutosize
                                                    style={{ backgroundColor: '#fff', borderRadius: '0.2rem', height: '130px' }}
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    width="100%"
                                                    id="address"
                                                    name="address"
                                                    autoComplete="address"
                                                    autoFocus
                                                    aria-label="minimum height"
                                                    rowsMin={3}
                                                    placeholder="Physical Address"
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                className={classes.ticketBtn}
                                                onClick={handleSubmit}
                                                style={{marginTop: '2rem'}}
                                            >
                                                SEND
                                                </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Fade>
                </Modal>

            </div>

        </div>
    );
};

export default MenuItem;