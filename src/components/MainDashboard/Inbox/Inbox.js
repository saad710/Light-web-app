import React from 'react';
import { Avatar, Divider, makeStyles, Typography } from '@material-ui/core';
import inboxData from '../../../data/inboxData';
import avatar from '../../../images/avatar.png'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));
const Inbox = () => {
    const classes = useStyles()
    const inboxMsg = inboxData
    return (
        <React.Fragment>
            {
                inboxMsg.map(inbox => (
                    <div>
                        <Divider style={{ margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center my-3" style={{ color: '#fff' }}>
                                <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                                    <img width="100%" src={avatar} alt="" />
                                </Avatar>
                                <Link to={`details/${inbox.id}`} style={{ textDecoration: 'none', color: '#2d2d2d' }}>
                                    <Typography variant="body5" style={{ margin: '0.5rem 0.5rem' }}>
                                        <strong> Marie Winter </strong> <br />
                                        <strong style={{ marginLeft: '0.5rem' }}> Lorem Ipsum is simply </strong> dummy text of the  printing and typesetting industry. Lorem Ipsum has been the industry standara level
                                </Typography>
                                </Link>
                            </div>
                            <Typography style={{ color: '#2d2d2d' }} variant="body6" align="right">
                                <small> just now </small>
                            </Typography>
                        </div>
                        <Divider style={{ margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                    </div>
                ))
            }
            

        </React.Fragment>
    );
};

export default Inbox;