import { Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AppBarDrawer from '../../MainDashboard/AppBarDrawer';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
        color: '#2d2d2d'
    },
    coutCard: {
        minWidth: 275,
    },
}));

const MailCount = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                           <Card>
                                <CardContent>
                                    <Typography>
                                        Total Mills
                                    </Typography>
                                </CardContent>
                            </Card> 
                        </div>
                    </Grid>

                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <Card>
                                <CardContent>
                                    <Typography>
                                        Total Mills
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>

                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <Card>
                                <CardContent>
                                    <Typography>
                                        Total Mills
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    

                </Container>
            </main>
        </div>
    );
};

export default MailCount;