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
}));
const Contact = () => {
    const classes = useStyles();
    // const message = inboxData.filter(singleMsg => singleMsg.id == inboxId)
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
                                        <div>
                                            <img className="pt-2" width="50%" src={avatar} alt="" />
                                            <div className="mt-3">
                                                <Typography variant="body2">
                                                    Marie Winter
                                                </Typography>
                                                <Typography variant="body6">
                                                    mariewinter@mail.com
                                                </Typography>
                                            </div>
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