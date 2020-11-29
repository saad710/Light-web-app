import { Button, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import avatar from '../../../images/avatar.png';
import editIcon from '../../../images/editIcon.png';
import AppBarDrawer from '../AppBarDrawer';
import { useStyles } from './ProfileStyle';

const Profile = () => {
    const classes = useStyles();
    const [profileInfo, setProfileInfo] = useState({})
    const [disable, setDisable] = useState(true)
    const [newPass, setNewPass] = useState({})
    console.log(newPass);
    const handleBlur = (e) => {
        const newProfile = { ...profileInfo }
        newProfile[e.target.name] = e.target.value
        setProfileInfo(newProfile)
    }
    const handlePassBlur = (e) => {
        const newPassword = { ...newPass }
        newPassword[e.target.name] = e.target.value
        setNewPass(newPassword)
        console.log(newPassword);
    }
    console.log(localStorage.client);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <div style={{margin: ' 0 auto'}}>
                                <img className="pt-2" style={{position:'relative'}} width="60%" src={avatar} alt="" />
                                <img style={{ position: 'absolute', top: '28.5%', left: '57.5%' }} src={editIcon} alt=""/>
                            </div>
                            <Typography style={{color: '#2d2d2d', marginTop:'1rem'}} component="body2" variant="body2">
                                Personal Details
                            </Typography>
                            <EditIcon onClick={() => setDisable(!disable)} fontSize="small" style={{ marginLeft: '32.5rem',marginTop:'-1.5rem', color: '#2d2d2d' }} />
                            <form className={classes.form} noValidate style={{color: '#2d2d2d'}}>
                                <div style={{ margin: '1rem 0'}}>
                                    <label htmlFor=""> Name </label>
                                    <TextField
                                        disabled={disable ? disable : '' }
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
                                <div className="pb-2">
                                    <label htmlFor=""> Email </label>
                                    <TextField
                                        // disabled={disable ? disable : ''}
                                        disabled
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

                            <form className={classes.form} noValidate style={{color: '#2d2d2d'}}>
                                <div className="pb-2">
                                    <label htmlFor=""> Old Password </label>
                                    <TextField
                                        // disabled={disable ? disable : ''}
                                        style={{borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password"
                                        name="password"
                                        autoComplete="password"
                                        autoFocus
                                        placeholder="***********"
                                        onBlur={handlePassBlur}
                                        type="password"
                                    />
                                </div>
                                <Button
                                    style={{ padding: '0.6rem 0', margin: '1rem 0' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    CHANGE PASSWORD
                                </Button>
                            </form>

                            


                            {/* <Typography component="body2" variant="body2">
                                Change Password
                                </Typography>
                            <EditIcon fontSize="small" style={{ marginLeft: '24.5rem' }} />
                            <div className="mt-3">
                                <label htmlFor=""> Enter your old password </label>
                                <TextField
                                    disabled={disable ? disable : ''}
                                    style={{ borderRadius: '4px' }}
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
                                    disabled={disable ? disable : ''}
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

                            <div className="mt-3">
                                <label htmlFor=""> Confrim password </label>
                                <TextField
                                    disabled={disable ? disable : ''}
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
                            </div> */}
                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Profile;