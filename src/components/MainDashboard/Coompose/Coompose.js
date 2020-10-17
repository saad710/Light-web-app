import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Button, Card, CardContent, CardHeader, FormControl, IconButton, InputAdornment, TextField } from '@material-ui/core';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import './Compose.css'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { useStyles } from './ComposeStyle';

const Coompose = () => {
    const classes = useStyles();
    const [ccOpen, setCcOpen] = useState(false)
    const [bccOpen, setBccOpen] = useState(false)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <Card style={{ margin: '0 auto', background: '#213F7E' }}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings" style={{color: '#fff'}}>
                                            <CancelOutlinedIcon />
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
                                                        startAdornment: <InputAdornment position="start">
                                                            <div className="d-flex">
                                                                <div>
                                                                    To
                                                                </div>
                                                                <div className="d-flex">
                                                                    <div className="px-2" onClick={() => setCcOpen(!ccOpen)}>
                                                                        Cc
                                                                    </div>
                                                                    <div className="px-2" onClick={() => setBccOpen(!bccOpen)}>
                                                                        Bcc
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                    />
                                                {
                                                    ccOpen && 
                                                    <TextField
                                                        id="filled-start-adornment"
                                                        InputProps={{
                                                            startAdornment: <InputAdornment position="start">Cc</InputAdornment>,
                                                        }}
                                                        variant="outlined"
                                                    />
                                                }
                                                {
                                                    bccOpen && 
                                                    <TextField
                                                        id="filled-start-adornment"
                                                        InputProps={{
                                                            startAdornment: <InputAdornment position="start">Bcc</InputAdornment>,
                                                        }}
                                                        variant="outlined"
                                                    />
                                                }
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