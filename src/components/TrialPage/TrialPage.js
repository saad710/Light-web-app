import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        display: 'flex',
        // flexDirection: 'column',
    },
    trialCard: {
        width: 250,
        color: '#fff !important',
        textAlign: 'center'
    }
    
}));


const TrialPage = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={4} className={classes.paper} >
                <div style={{width: '80%'}} className="container">
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
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={8} elevation={6} square>
                <div className={classes.paper}>
                    <Card className={classes.trialCard} variant="outlined" style={{ backgroundColor: '#213F7E'}}>
                        <CardContent>
                            <Typography variant="body1">
                                STARTER
                            </Typography>
                            <Typography variant="h3">
                                $8
                            </Typography>
                            <Typography variant="body6">
                                <small> per month </small>
                            </Typography>
                            <Typography variant="body1">
                                Starter features for your business to grow
                            </Typography>
                            
                        
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </div>
            </Grid>
                
        </Grid>
    );
};

export default TrialPage;