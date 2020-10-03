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
    },
    fixedHeight: {
        height: 240,
    },
}));
const InboxDetails = () => {
    const classes = useStyles();
    const { inboxId} = useParams()
    const message = inboxData.filter(singleMsg => singleMsg.id == inboxId)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className="d-flex align-items-center my-3" style={{ color: '#2d2d2d' }}>
                            <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                                <img width="100%" src={avatar} alt="" />
                            </Avatar>
                            <Typography variant="body5" style={{ margin: '0.5rem 0.5rem' }}>
                                <strong> {message[0].name} </strong> <br />
                                <strong style={{ marginLeft: '0.5rem' }}> {message[0].email} </strong>
                            </Typography>
                        </div>
                        <Typography variant="body6">
                            {message[0].message}
                        </Typography>
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default InboxDetails;