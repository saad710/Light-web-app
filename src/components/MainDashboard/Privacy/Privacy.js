import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import {TextField, Typography } from '@material-ui/core';
import avatar from '../../../images/avatar.png'
import { useStyles } from '../AppBarDrawerStyle';

const Privacy = () => {
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
                            <img className="pt-2" style={{ margin: ' 0 auto ' }} width="20%" src={avatar} alt="" />
                            <Typography component="body6" variant="body5">
                                Privacy
                            </Typography>
                            <Typography component="body6" variant="body5">
                                Who can see your contact information?
                            </Typography>
                            <form className={classes.form} noValidate>
                                <div style={{ margin: '1rem 0' }}>
                                    <label htmlFor=""> Name </label>
                                    <TextField
                                        style={{ borderRadius: '4px' }}
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
                                        style={{  borderRadius: '4px' }}
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
                            </form>
                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Privacy;