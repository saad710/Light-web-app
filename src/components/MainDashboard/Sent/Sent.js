import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import inboxData from '../../../data/inboxData';
import { Avatar, Divider, Typography } from '@material-ui/core';
import avatar from '../../../images/avatar.png'
import { Link } from 'react-router-dom'
import ToolBar from '../ToolBar/ToolBar';
import SentFilter from '../SentFilter/SentFilter';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#fff'
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: 'auto',
        // overflow: 'auto',

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
    btnStyle: {
        backgroundColor: '#213F7E',
        color: '#fff',
        borderRadius: 0,
        padding: '0.5rem 5rem',
    }
}));
const Sent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <ToolBar />
                <Container maxWidth="lg" className={classes.container}>
                    {
                        inboxData.map(sent => (
                            <div key={sent.id} >
                                < Divider style={{ margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center my-3" style={{ color: '#fff' }}>
                                        <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                                            <img width="100%" src={avatar} alt="" />
                                        </Avatar>
                                        <Link to={`details/${sent.id}`} style={{ textDecoration: 'none', color: '#2d2d2d' }}>
                                            <Typography variant="body1" style={{ margin: '0.5rem 0.5rem' }}>
                                                <strong> Marie Winter </strong> <br />
                                                <strong style={{ marginLeft: '0.5rem' }}> Lorem Ipsum is simply </strong> dummy text of the  printing and typesetting industry. Lorem Ipsum has been the industry standara level
                                            </Typography>
                                        </Link>
                                    </div>
                                    <Typography style={{ color: '#2d2d2d' }} variant="body1" align="right">
                                        <small> just now </small>
                                    </Typography>
                                </div>
                                <Divider style={{ margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                            </div>
                        ))
                    }
                   
                </Container>
            </main>
        </div>
    );
};

export default Sent;