import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Button, Card, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, TextField } from '@material-ui/core';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import './Compose.css'
import { useStyles } from './ComposeStyle';

const Coompose = () => {
    const classes = useStyles();
    const [value, setValue] = useState({})
    const [ccOpen, setCcOpen] = useState(false)
    const [bccOpen, setBccOpen] = useState(false)
    const [group, setGroup] = useState(false)
    const [tags, setTags] = useState(false)

    const [checkBox, setCheckBox] = useState({
        quickReply: false,
        noReply: false,
    });

    const handleChange = (event) => {
        setCheckBox({ ...checkBox, [event.target.name]: event.target.checked });
    };

    console.log(value);
    const handleInput = (e) => {
        e.preventDefault();
        const newValue = { ...value }
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }

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
                                />
                                <CardContent>
                                    <form className={classes.form} noValidate>

                                        <div>
                                            <FormControl>
                                                <TextField
                                                    id="from"
                                                    name="from"
                                                    onBlur={handleInput}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">From</InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    id="to"
                                                    name="to"
                                                    onBlur={handleInput}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">
                                                            <div className="d-flex">
                                                                <div>
                                                                    To
                                                                </div>
                                                                <div className="d-flex" style={{ position: 'absolute', left: '70%' }}>
                                                                    <div className="px-2" onClick={() => setCcOpen(!ccOpen)}>
                                                                        Cc
                                                                    </div>
                                                                    <div className="px-2" onClick={() => setBccOpen(!bccOpen)}>
                                                                        Bcc
                                                                    </div>
                                                                    <div className="px-2" onClick={() => setGroup(!group)}>
                                                                        Group
                                                                    </div>
                                                                    <div className="px-2" onClick={() => setTags(!tags)}>
                                                                        Add Tag
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    id="subject"
                                                    name="subject"
                                                    onBlur={handleInput}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">Subject</InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                />
                                                {
                                                    ccOpen &&
                                                    <TextField
                                                        id="cc"
                                                        name="cc"
                                                        onBlur={handleInput}
                                                        InputProps={{
                                                            startAdornment: <InputAdornment position="start">Cc</InputAdornment>,
                                                        }}
                                                        variant="outlined"
                                                    />
                                                }
                                                {
                                                    bccOpen &&
                                                    <TextField
                                                        id="bcc"
                                                        name="bcc"
                                                        onBlur={handleInput}
                                                        InputProps={{
                                                            startAdornment: <InputAdornment position="start">Bcc</InputAdornment>,
                                                        }}
                                                        variant="outlined"
                                                    />
                                                }

                                                {
                                                    group &&
                                                    <TextField
                                                        id="group"
                                                        name="group"
                                                        onBlur={handleInput}
                                                        InputProps={{
                                                            startAdornment: <InputAdornment position="start">Group</InputAdornment>,
                                                        }}
                                                        variant="outlined"
                                                    />
                                                }
                                                {
                                                    tags &&
                                                    <TextField
                                                        id="tag"
                                                        name="tag"
                                                        onBlur={handleInput}
                                                        InputProps={{
                                                            startAdornment: <InputAdornment position="start">Add Tag</InputAdornment>,
                                                        }}
                                                        variant="outlined"
                                                    />
                                                }

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
                                        <FormGroup row>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkBox.quickReply}
                                                        onChange={handleChange}
                                                        name="quickReply"
                                                    />}
                                                label="Secondary"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkBox.noReply}
                                                        onChange={handleChange}
                                                        name="noReply"
                                                        color="primary"
                                                    />
                                                }
                                                label="Primary"
                                            />


                                        </FormGroup>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="secondary"
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