import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import {Button, TextField, Typography } from '@material-ui/core';
import avatar from '../../../images/avatar.png'
import { useStyles } from './ProfileStyle';
import { useState } from 'react';

const Profile = () => {
    const classes = useStyles();
    const [profileInfo, setProfileInfo] = useState({})
    // console.log(profileInfo);
    const handleBlur = (e) => {
        const newProfile = { ...profileInfo }
        newProfile[e.target.name] = e.target.value
        setProfileInfo(newProfile)
    }
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
                                        onBlur={handleBlur}
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
                                        onBlur={handleBlur}
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
                                        name="oldPass"
                                        type="password"
                                        id="oldPass"
                                        autoComplete="current-password"
                                        placeholder="***********"
                                        onBlur={handleBlur}
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
                                        name="newPass"
                                        type="password"
                                        id="newPass"
                                        autoComplete="current-password"
                                        placeholder="***********"
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor=""> Confrim password </label>
                                    <TextField
                                        style={{ borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="newPass"
                                        type="password"
                                        id="newPass"
                                        autoComplete="current-password"
                                        placeholder="***********"
                                        onBlur={handleBlur}
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