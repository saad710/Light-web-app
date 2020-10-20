import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { useParams } from 'react-router-dom';
import inboxData from '../../../data/inboxData';
import { Avatar, Button, Chip, Typography } from '@material-ui/core';
import avatar from '../../../images/avatar.png'
import {Link} from 'react-router-dom'
import { useStyles } from './InboxDetailsStyle';

const InboxDetails = () => {
    const classes = useStyles();
    const { inboxId } = useParams()
    const message = inboxData.filter(singleMsg => singleMsg.id == inboxId)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className="d-flex align-items-center my-3" style={{ color: '#2d2d2d' }}>
                            <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                                <img width="100%" src={avatar} alt="" />
                            </Avatar>
                            <Typography variant="body5" style={{ margin: '0.5rem 0.5rem', color: '#2d2d2d' }}>
                                <strong style={{ marginLeft: '1rem' }}> {message[0].name} </strong> <br />
                                {/* <strong style={{ marginLeft: '1rem' }}> {message[0].email} </strong> */}
                                <small style={{ marginLeft: '1rem' }}> 
                                    From : marie@gmail.com
                                </small>
                                <br/>
                                
                                <small style={{ marginLeft: '1rem' }}>
                                    To : alex@email.com
                                </small>
                                <br />
                                <small style={{ marginLeft: '1rem' }}>
                                    Cc : info@domain.com
                                </small>
                                <br />
                                <small style={{ marginLeft: '1rem' }}>
                                    Subject : lorem ipsum
                                </small>
                                <br />

                                <Chip
                                    style={{
                                            marginLeft: '1rem',
                                            marginTop: '0.5rem',
                                            fontSize: '11px',
                                            backgroundColor: '#203D79',
                                            height: '1.5rem',
                                            width: '5rem',
                                            color: '#fff',
                                    }}
                                    label={message[0].type} 
                                
                                />
                            </Typography>
                            <Link to="/report">
                                <button
                                    style={{
                                        background: '#4195D1',
                                        marginLeft: '38rem',
                                        padding: '5px 8px',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px'
                                    }}>
                                    See Report
                            </button>
                            </Link>
                        </div>
                        <Typography variant="body6" style={{ marginLeft: '4rem', color: '#2d2d2d', lineHeight: '2' }}>
                            {message[0].message}
                        </Typography>
                        <div style={{
                            width: '40%',
                            height: '10rem',
                            backgroundColor: '#8797B9',
                            margin: '3rem 4rem'
                        }}>

                        </div>

                    </Grid>
                    <div style={{marginLeft:'3rem'}}>
                        <Button variant="contained" className={classes.btnStyle} color="primary">
                            REPLY
                        </Button>

                        <Button style={{ margin: '0rem 1rem' }} variant="contained" className={classes.btnStyle} color="primary">
                            CLOSE
                        </Button>
                    </div>
                </Container>
            </main>
        </div>
    );
};

export default InboxDetails;