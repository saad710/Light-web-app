import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import avatar from '../../../images/avatar.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#fff'
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
        width: '100%',
        color: '#fff'
    },
    fixedHeight: {
        height: 240,
    },
    btnStyle: {
        padding: '0.6rem 0px',
        marginTop: '0.5rem',
        marginLeft: '38rem',
        width: '7rem',
        backgroundColor: '#4195D1'
    },
    form: {
        margin: '0 auto'
    },
    signatureBox: {
        border: '2px solid #4195D1',
        borderRadius: '0.5rem',
        padding: '2rem',
        width: '70%',
        margin: '0.5rem auto'
    },
    emailBtn: {
        background: 'none',
        padding: '0.3rem 1.5rem',
        border: '1px solid gray',
        margin: '0 1rem 2rem 1rem'
    }
}));

const EmailSignature = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <div style={{margin: '0 auto'}}>
                                <Button variant="contained" className={classes.emailBtn}>
                                    Add New
                                </Button>
                                <Button variant="contained" className={classes.emailBtn}>
                                    Update
                                </Button>
                            </div>
                            <div className={classes.signatureBox}>
                                <div className="d-flex" style={{ marginLeft: '0.5rem' }}>
                                    <div>
                                        <img className="pt-2" width="50%" src={avatar} alt="" />
                                    </div>
                                    <div style={{ color: '#2d2d2d', marginLeft: '-1.5rem' }}>
                                        <h6> Marie Winter </h6>
                                        <p> <strong> Designation </strong> </p>
                                        <p>
                                            <span> Phone : +45 343 3434 21 </span>
                                            <span style={{ padding: '0 1rem' }}> Address : 1547 East Farm  Road </span>
                                        </p>
                                        <hr style={{ backgroundColor: '#4195D1', padding: '0.5px 0' }} />
                                        <div style={{ margin: '0 4.5rem' }}>
                                            <FacebookIcon style={{ margin: '0 1rem' }} />
                                            <TwitterIcon style={{ margin: '0 1rem' }} />
                                            <InstagramIcon style={{ margin: '0 1rem' }} />
                                            <LanguageIcon style={{ margin: '0 1rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.signatureBox}>
                                <div className="d-flex" style={{ marginLeft: '0.5rem' }}>
                                    <div>
                                        <img className="pt-2" width="50%" src={avatar} alt="" />
                                    </div>
                                    <div style={{ color: '#2d2d2d', marginLeft: '-1.5rem' }}>
                                        <h6> Marie Winter </h6>
                                        <p> <strong> Designation </strong> </p>
                                        <p>
                                            <span> Phone : +45 343 3434 21 </span>
                                            <span style={{ padding: '0 1rem' }}> Address : 1547 East Farm  Road </span>
                                        </p>
                                        <hr style={{ backgroundColor: '#4195D1', padding: '0.5px 0' }} />
                                        <div style={{ margin: '0 4.5rem' }}>
                                            <FacebookIcon style={{ margin: '0 1rem' }} />
                                            <TwitterIcon style={{ margin: '0 1rem' }} />
                                            <InstagramIcon style={{ margin: '0 1rem' }} />
                                            <LanguageIcon style={{ margin: '0 1rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default EmailSignature;