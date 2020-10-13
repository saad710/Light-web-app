import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        marginTop: '130px'
    },
    
}));


const TrialPage = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={6} className={classes.signInRight} >
                <h2> text section </h2>
            </Grid>
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square
                style={{ backgroundColor: '#fff'}}
            >
                <div className={classes.paper}>
                    <h2> Card Section </h2>
                </div>
            </Grid>
        </Grid>
    );
};

export default TrialPage;