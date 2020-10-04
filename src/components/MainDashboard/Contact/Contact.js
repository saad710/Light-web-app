import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { useParams } from 'react-router-dom';
import inboxData from '../../../data/inboxData';
import { Avatar, Typography } from '@material-ui/core';
import avatar from '../../../images/avatar.png'
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import './Contact.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#4195D1'
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        background: 'no-repeat',
        boxShadow: 'none',
        border: '1px solid black',
        textAlign: 'center',
        color: '#fff',
        width: '100%',
        height: '12rem',
    },
    fixedHeight: {
        height: 240,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPaper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    cardRoot: {
        minWidth: 275,
        textAlign: 'center',
        color: '#fff'
        
    }
}));
const Contact = () => {
    const classes = useStyles();
    // const message = inboxData.filter(singleMsg => singleMsg.id == inboxId)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        {
                            inboxData.map(inbox => (
                                <Grid item xs={12} md={3} lg={3}>
                                    <Paper className={classes.paper}>
                                        <div onClick={handleOpen}>
                                            <img className="pt-2" width="50%" src={avatar} alt="" />
                                            <div className="mt-3">
                                                <Typography variant="body2">
                                                    {inbox.name}
                                                </Typography>
                                                <Typography variant="body6">
                                                    {inbox.email}
                                                </Typography>
                                            </div>
                                        </div>
                                        <div>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                className={classes.modal}
                                                open={open}
                                                onClose={handleClose}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                            >
                                                <Fade in={open}>
                                                    <div className={classes.modalPaper}>
                                                        <div className="mt-3">
                                                            <Card className={classes.cardRoot}>
                                                                <img className="pt-2" width="50%" src={avatar} alt="" />
                                                                <CardContent style={{background:'none !important'}}>
                                                                    <Typography variant="body2">
                                                                        Marie Winter
                                                                    </Typography>
                                                                    <Typography variant="body6">
                                                                        mariewinter@mail.com
                                                                    </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </Modal>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))
                        }

                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default Contact;