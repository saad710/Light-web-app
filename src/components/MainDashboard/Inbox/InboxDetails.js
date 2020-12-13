import { Avatar, Button, Chip, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import { key } from '../../../apiKey';
import avatar from '../../../images/avatar.png';
import AppBarDrawer from '../AppBarDrawer';
import { useStyles } from './InboxDetailsStyle';

const InboxDetails = () => {
    const classes = useStyles();
    const [singleInbox, setSingleInbox] = useState(null)
    useEffect(() => {
        const client_id = 1
        Axios(`${key}client-all-mail/${client_id}`)
            .then(res => {
                console.log(res);
                const mails = res.data.all_mail
                setSingleInbox(mails)
            })
            .then(err => {
                console.log(err);
            })
    }, [])
    const { inboxId } = useParams()
    console.log(inboxId);
    const message = singleInbox !== null && singleInbox.filter(singleMsg => singleMsg.id == inboxId)
    console.log(message[0]);
    const info = message[0]
    console.log("details", info);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            {
                info !== undefined &&
                <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className="d-flex align-items-center my-3" style={{ color: '#2d2d2d' }}>
                            <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                                <img width="100%" src={avatar} alt="" />
                            </Avatar>
                            <Typography variant="body1" style={{ margin: '0.5rem 0.5rem', color: '#2d2d2d' }}>
                                <strong style={{ marginLeft: '1rem' }}> { `${info.first_name} ${info.last_name}` } </strong> <br />
                                <small style={{ marginLeft: '1rem' }}> 
                                    From : {info.sender}
                                </small>
                                <br/>
                                
                                <small style={{ marginLeft: '1rem' }}>
                                    To : {info.receiver}
                                </small>
                                <br />
                                <small style={{ marginLeft: '1rem' }}>
                                    Cc : { info.cc }
                                </small>
                                <br />
                                <small style={{ marginLeft: '1rem' }}>
                                    Subject : { info.subject }
                                </small>
                                <br />

                                    <div className="d-flex align-items-center">
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
                                            label={info.type}

                                        />
                                        <div>
                                            
                                        </div>
                                </div>

                            </Typography>
                        </div>
                        <Typography variant="body1" style={{ marginLeft: '4rem', color: '#2d2d2d', lineHeight: '2' }}>
                            {ReactHtmlParser(info.mail_body)}
                        </Typography>
                        <div className={classes.downloadfileStyle}>
                           <Typography variant="h6" component="h6" align="center"> {info.mail_file} </Typography>
                                {/* <Link to={`${key}file-down/${info.mail_file}`} target="_blank" download> */}
                                <a href={`${key}file-down/${info.mail_file}`}>
                                    <Button
                                    style={{ marginLeft: '4rem' }}
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<CloudDownloadIcon />}
                                    >
                                        Download
                                    </Button>
                                </a>
                                {/* </Link> */}
                        </div>
                        

                    </Grid>
                    {/* <div className={classes.replyStyle} >
                        <List component="nav" className='d-flex-column' aria-label="mailbox folders" >
                            <ListItem button>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Trash" />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary="Spam" />
                            </ListItem>
                        </List>
                    </div> */}
                    {/* <div style={{marginLeft:'3rem', marginTop: '35vh'}}>
                        <Button variant="contained" className={classes.btnStyle} color="primary">
                            REPLY
                        </Button>

                        <Button style={{ margin: '0rem 1rem' }} variant="contained" className={classes.btnStyle} color="primary">
                            CLOSE
                        </Button>
                    </div> */}
                </Container>
            </main>
            }
        </div>
    );
};

export default InboxDetails;