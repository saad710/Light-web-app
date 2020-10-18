import React from 'react';
import {CardMedia, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import bar1 from '../../../images/bar1.svg'
import bar2 from '../../../images/bar2.svg'
import bar3 from '../../../images/bar3.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardRoot: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: '50px',
        width: '140px'
    },
}));

const MailCount = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <Card className={classes.cardRoot}>
                            <CardContent>
                                <Typography align="left">
                                    Total Mails
                                </Typography>
                                <Typography>
                                    <strong> 246 </strong>
                                </Typography>
                            </CardContent>
                            <CardMedia
                                className= {classes.media}
                                image = {bar1}
                            >
                                {/* <img src={bar1} alt=""/> */}
                            </CardMedia>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default MailCount;