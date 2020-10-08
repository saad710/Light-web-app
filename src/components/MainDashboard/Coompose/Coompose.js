import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import inboxData from '../../../data/inboxData';
import { Avatar, Button, Card, CardContent, CardHeader, Chip, Divider, FormControl, IconButton, Input, InputAdornment, InputLabel, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import avatar from '../../../images/avatar.png'
import { Link } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import './Compose.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';



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
        color: '#fff'
    },
    fixedHeight: {
        height: 240,
    },
    btnStyle: {
        padding: '0.6rem 0px',
        marginTop: '0.5rem',
        marginLeft: '38rem',
        width: '7rem',
        backgroundColor: '#4195D1'
    },
    form: {
        margin: '0 auto'
    }
}));
const Coompose = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <Card style={{ margin: '0 auto', background: '#213F7E'}}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                />
                                <CardContent>
                                    <form className={classes.form} noValidate>

                                        <div>
                                            <FormControl>
                                                <TextField

                                                    id="filled-start-adornment"
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">From</InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    id="filled-start-adornment"
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">To</InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    id="filled-start-adornment"
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">Subject</InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                />
                                                <SunEditor
                                                    width="100%"
                                                    placeholder="Details..."
                                                    setOptions={{
                                                        height: 100,
                                                        buttonList: [
                                                            ['font', 'fontSize', 'formatBlock'],
                                                            ['bold', 'underline', 'italic',],
                                                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                                                            ['link', 'image', 'video',],
                                                            ['fullScreen', 'codeView'],
                                                        ]
                                                    }}
                                                />

                                            </FormControl>
                                        </div>

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.btnStyle}
                                        >
                                            Send
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Coompose;