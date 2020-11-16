import { Avatar, Checkbox, Chip, Container, Divider, Grid, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RefreshIcon from '@material-ui/icons/Refresh';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { key } from '../../../apiKey';
import avatar from '../../../images/avatar.png';
import { useStyles } from './InboxStyle';

const Inbox = () => {
    const classes = useStyles()
    const [openPanel, setOpenPanel] = useState(false);
    const [allMail, setAllMail] = useState(null)
    
    useEffect(() => {
        const client_id = 1
        Axios(`${key}client-all-mail/${client_id}`)
            .then(res => {
                const mails = res.data.all_mail
                setAllMail(mails)
            })
            .then(err => {
                console.log(err);
            })
    }, [])
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid style={{marginTop: '-1.5rem'}}>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <RefreshIcon />
                        </div>
                        <di v className="d-flex" style={{ marginLeft: '48rem' }}>
                            <div style={{ padding: '0 2rem' }}>
                                1 of 21
                            </div>
                            <div>
                                <ArrowBackIosIcon fontSize="small" />
                                <ArrowForwardIosIcon fontSize="small" />
                            </div>
                        </di>
                    </div>
                </Grid>
                { allMail !== null &&
                    allMail.map(inbox => (
                        <div key={inbox.id}>
                            <Divider style={{ margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center my-3" style={{ color: '#fff' }}>
                                    <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                                        <img width="100%" src={avatar} alt="" />
                                    </Avatar>
                                    <Link to={`details/${inbox.id}`} style={{ textDecoration: 'none', color: '#2d2d2d' }}>
                                        <Typography variant="body1" style={{ margin: '0.5rem 0.5rem' }}>
                                            <strong> {`${inbox.first_name} ${inbox.last_name}`} </strong>
                                            <Chip
                                                style={{
                                                    marginLeft: '1rem',
                                                    fontSize: '11px',
                                                    backgroundColor: '#203D79',
                                                    height: '1.5rem',
                                                    width: '5rem',
                                                    color: '#fff',
                                                }}
                                                label="quick reply"
                                            />
                                            <br />
                                            <strong style={{ marginLeft: '0.5rem' }}> Lorem Ipsum is simply </strong> dummy text of the  printing and typesetting industry. Lorem Ipsum has been
                                        </Typography>

                                    </Link>
                                </div>
                                <Link to="/report">
                                    <button
                                        style={{
                                            background: '#4195D1',
                                            padding: '5px 8px',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '5px'
                                        }}>
                                        Report
                                        </button>
                                </Link>
                                <Typography style={{ color: '#2d2d2d' }} variant="body1" align="right">
                                    <small> just now </small>
                                </Typography>
                            </div>
                            <Divider style={{ margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                        </div>
                    ))
                }
            </Container>
        </React.Fragment>
    );
};

export default Inbox;