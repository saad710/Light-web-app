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
    ulBtn :{
        padding:'0.5rem 1rem',
        backgroundColor: '#2F2E41',
        color: '#fff',
        width: '45%',
        margin: '1rem auto'
    },
    trialBtn: {
        backgroundColor: '#2d2d2d !important',
        color: '#fff',
        width: '45%',
        padding: '0.5rem 0',
        margin: 'auto',
        fontSize: '8px'
    }

}));


const TrialPage = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={4} className={classes.paper} >
                <div style={{ width: '80%' }} className="container">
                    <Typography variant="h6" style={{fontSize: '32px'}}>
                        Start Your Free Trial
                    </Typography>
                    <Typography variant="body1"
                        style={{ 
                            fontSize: '14px',
                            color: '#707070',
                            margin: '0.5rem 0'
                        }}
                    
                    >
                        You will not be billed during your free trial.
                        To keep your account running after the trial end upgrade to
                        a paid option.
                    </Typography>
                    <Typography
                        style={{
                            fontSize: '14px',
                            color: '#707070',
                            margin: '0.5rem 0'
                        }}
                    >
                        <ul className="pt-3">
                            <li className="py-2"> 5 days trail </li>
                            <li className="py-2"> 10 emails per day </li>
                            <li className="py-2"> Limited Access </li>
                        </ul>
                    </Typography>
                    <Link to="/inbox">
                        <Button className={classes.ulBtn} variant="contained" color="primary" size="small"> Continue </Button>
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={8} elevation={6} square>
                <div className={classes.paper}>
                    <Card className={classes.trialCard} variant="outlined" style={{ backgroundColor: '#213F7E' }}>
                        <CardContent>
                            <Typography variant="body1"
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                STARTER
                            </Typography>
                            <div style={{ padding: '2rem 0' }}>
                                <Typography variant="h3"
                                    style={{
                                        fontSize: '60px',
                                        fontWeight: 'regular',
                                    }}
                                >
                                    $8
                                </Typography>
                                <Typography variant="body6"
                                    style={{
                                        color: '#fff',
                                        opacity: 0.5
                                    }}
                                >
                                    <small> per month </small>
                                </Typography>
                            </div>
                            <Typography variant="body1"
                                style={{
                                    fontSize: '20px',
                                    fontWeight: '400',
                                    marginBottom: '1rem'
                                }}
                            >
                                Starter features for your business to grow
                            </Typography>
                        </CardContent>
                        <Link to="/payment">
                            <CardActions >
                                <Button className={classes.trialBtn} size="small" variant="contained" color="primary"> Continue </Button>
                            </CardActions>
                        </Link>
                    </Card>

                    <Card className={classes.trialCard} variant="outlined" style={{ backgroundColor: '#4195D1' }}>
                        <CardContent>
                            <Typography variant="body1"
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                PROFESSIONAL
                            </Typography>
                            <div style={{ padding: '2rem 0' }}>
                                <Typography variant="h3"
                                    style={{
                                        fontSize: '60px',
                                        fontWeight: 'regular',
                                    }}
                                >
                                    $18
                                </Typography>
                                <Typography variant="body6"
                                    style={{
                                        color: '#fff',
                                        opacity: 0.5
                                    }}
                                >
                                    <small> per month </small>
                                </Typography>
                            </div>
                            <Typography variant="body1"
                                style={{
                                    fontSize: '20px',
                                    fontWeight: '400',
                                    marginBottom: '1rem'
                                }}
                            >
                                Starter features for your business to grow
                            </Typography>
                        </CardContent>
                        <Link to="/payment">
                            <CardActions >
                                <Button className={classes.trialBtn} size="small" variant="contained" color="primary"> Continue </Button>
                            </CardActions>
                        </Link>
                    </Card>

                    <Card className={classes.trialCard} variant="outlined" style={{ backgroundColor: '#43425D' }}>
                        <CardContent>
                            <Typography variant="body1"
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                ADVANCED
                            </Typography>
                            <div style={{ padding: '2rem 0' }}>
                                <Typography variant="h3"
                                    style={{
                                        fontSize: '60px',
                                        fontWeight: 'regular',
                                    }}
                                >
                                    $48
                                </Typography>
                                <Typography variant="body6"
                                    style={{
                                        color: '#fff',
                                        opacity: 0.5
                                    }}
                                >
                                    <small> per month </small>
                                </Typography>
                            </div>
                            <Typography variant="body1"
                                style={{
                                    fontSize: '20px',
                                    fontWeight: '400',
                                    marginBottom: '1rem'
                                }}
                            >
                                Starter features for your business to grow
                            </Typography>
                        </CardContent>
                        <Link to="/payment">
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