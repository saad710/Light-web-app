import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        margin: '7rem auto'
    },
    paper: {
        display: 'flex',
        // flexDirection: 'column',
    },
    trialCard: {
        width: 250,
        color: '#fff !important',
        textAlign: 'center',
        borderRadius: '0',
        margin: '0 1rem',
        padding: '1.5rem 0'
    },
    trialBtn: {
        backgroundColor: '#2F2E41',
        color: '#fff',
        width: '45%',
        padding: '0.5rem 0',
        margin: '1rem auto'
    }

}));


const TrialPage = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={4} className={classes.paper} >
                <div style={{ width: '80%' }} className="container">
                    <Typography variant="h6">
                        Start Your Free Trial
                    </Typography>
                    <Typography>
                        You will not be billed during your free trial.
                        To keep your account running after the trial end upgrade to
                        a paid option.
                        <ul>
                            <li> 5 days trail </li>
                            <li> 10 emails per day </li>
                            <li> Limited Access </li>
                        </ul>
                    </Typography>
                    <Link to="/inbox">
                        <Button className={classes.trialBtn} variant="contained" color="primary" size="small"> Continue </Button>
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={8} elevation={6} square>
                <div className={classes.paper}>
                    <Card className={classes.trialCard} variant="outlined" style={{ backgroundColor: '#213F7E' }}>
                        <CardContent>
                            <Typography variant="body1">
                                STARTER
                            </Typography>
                            <div style={{ padding: '2rem 0' }}>
                                <Typography variant="h3">
                                    $8
                            </Typography>
                                <Typography variant="body6">
                                    <small> per month </small>
                                </Typography>
                            </div>
                            <Typography variant="body1">
                                Starter features for your business to grow
                            </Typography>
                        </CardContent>
                        <Link to="/inbox">
                            <CardActions >
                                <Button className={classes.trialBtn} size="small" variant="contained" color="primary"> Continue </Button>
                            </CardActions>
                        </Link>
                    </Card>

                    <Card className={classes.trialCard} variant="outlined" style={{ backgroundColor: '#4195D1' }}>
                        <CardContent>
                            <Typography variant="body1">
                                PROFESSIONAL
                            </Typography>
                            <div style={{ padding: '2rem 0' }}>
                                <Typography variant="h3">
                                    $18
                            </Typography>
                                <Typography variant="body6">
                                    <small> per month </small>
                                </Typography>
                            </div>
                            <Typography variant="body1">
                                Starter features for your business to grow
                            </Typography>
                        </CardContent>
                        <Link to="/inbox">
                            <CardActions >
                                <Button className={classes.trialBtn} size="small" variant="contained" color="primary"> Continue </Button>
                            </CardActions>
                        </Link>
                    </Card>

                    <Card className={classes.trialCard} variant="outlined" style={{ backgroundColor: '#43425D' }}>
                        <CardContent>
                            <Typography variant="body1">
                                ADVANCED
                            </Typography>
                            <div style={{ padding: '2rem 0' }}>
                                <Typography variant="h3">
                                    $48
                            </Typography>
                                <Typography variant="body6">
                                    <small> per month </small>
                                </Typography>
                            </div>
                            <Typography variant="body1">
                                Starter features for your business to grow
                            </Typography>
                        </CardContent>
                        <Link to="/inbox">
                            <CardActions >
                                <Button className={classes.trialBtn} size="small" variant="contained" color="primary"> Continue </Button>
                            </CardActions>
                        </Link>
                    </Card>

                </div>
            </Grid>

        </Grid>
    );
};

export default TrialPage;