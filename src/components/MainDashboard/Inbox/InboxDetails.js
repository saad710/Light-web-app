import React, { useEffect, useState } from 'react';
import { Avatar, Divider, makeStyles, Typography } from '@material-ui/core';
import inboxData from '../../../data/inboxData';
import avatar from '../../../images/avatar.png'
import { Link, useParams } from 'react-router-dom'

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
const InboxDetails = () => {
    const classes = useStyles()
    const { inboxId} = useParams()
    const message = inboxData.filter(singleMsg => singleMsg.id == inboxId)
    console.log(message);
    return (
        
            <div>
                <div className="my-3" style={{ color: '#2d2d2d' }}>
                    <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                        <img width="100%" src={avatar} alt="" />
                    </Avatar>
                    <Typography variant="body5" style={{ margin: '0.5rem 0.5rem' }}>
                        <strong> {message[0].name} </strong> <br />
                        <strong style={{ marginLeft: '0.5rem' }}> {message[0].email} </strong>
                    </Typography>
                    <Typography variant="body6">
                        {message[0].message}
                    </Typography>
                </div>
            </div>

    );
};

export default InboxDetails;