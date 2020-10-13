import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom'
import './SignIn.css'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    signInRight: {
        width: '100vh',
        // backgroundColor: '#213F7E'
        backgroundImage: "linear-gradient(#213F7E, #4195D1)",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        marginTop: '130px'
        
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: '#2d2d2d'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#213F7E',
        borderRadius: '0.5rem',
        padding: '0.5rem 0'
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={6} className={classes.signInRight} >
                <div style={{margin: '10rem 0'}}>
                    <Typography variant="h6" style={{ textAlign: 'center', color: '#fff', fontSize: '52px' }}>
                        Welcome to <br /> Client Web App
                </Typography>
                <Typography style={{ width: '60%', color: '#fff', fontSize: "14px", textAlign: 'center', margin: '0 auto' }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square
                style={{ backgroundColor: '#fff'}}
            >
                <div className={classes.paper}>
                    <Typography component="h1" variant="body1" style={{color: '#2d2d2d'}}>
                        SIGN IN
                    </Typography>
                    <form className={classes.form} noValidate>
                        <div>
                            <label htmlFor=""> Email </label>
                            <TextField
                                style={{ backgroundColor: '#fff'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                placeholder="user@email.com"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor=""> Password </label>
                            <TextField
                                style={{ backgroundColor: '#fff' }}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                placeholder="***********"
                            />
                        </div>
                        <NavLink to="/trial">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                           
                                Sign In
                            
                        </Button>
                        </NavLink>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" style={{color: '#2d2d2d', display:'block', textAlign:'center'}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}