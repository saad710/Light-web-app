import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import {Button, TextField, Typography } from '@material-ui/core';
import avatar from '../../../images/avatar.png'

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
        backgroundColor: '#213F7E',
        color: '#fff',
        borderRadius: 0,
        padding: '0.5rem 5rem',
    }
}));
const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <img className="pt-2" style={{margin: ' 0 auto '}} width="20%" src={avatar} alt="" />
                            <Typography style={{color: '#2d2d2d'}} component="body6" variant="body6">
                                Personal Details
                            </Typography>
                            <form className={classes.form} noValidate style={{color: '#2d2d2d'}}>
                                <div style={{ margin: '1rem 0'}}>
                                    <label htmlFor=""> Name </label>
                                    <TextField
                                        style={{ borderRadius:'4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        autoFocus
                                        placeholder="Marie Winter"
                                    />
                                    
                                </div>
                                <div>
                                    <label htmlFor=""> Email </label>
                                    <TextField
                                        style={{borderRadius: '4px' }}
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
                                <Typography className="mt-5" component="body6" variant="body6">
                                    Change Password
                                </Typography>
                                <div className="mt-3">
                                    <label htmlFor=""> Enter your old password </label>
                                    <TextField
                                        style={{borderRadius: '4px' }}
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

                                <div className="mt-3">
                                    <label htmlFor=""> Enter new password </label>
                                    <TextField
                                        style={{borderRadius: '4px' }}
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
                                <Button
                                    style={{padding: '0.6rem 0', margin: '1rem 0'}}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    SAVE
                                </Button>
                            </form>
                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Profile;