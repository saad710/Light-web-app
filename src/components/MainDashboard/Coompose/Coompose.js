import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Button, Card, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, TextareaAutosize, TextField } from '@material-ui/core';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import './Compose.css'
import { useStyles } from './ComposeStyle';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const Coompose = () => {
    const classes = useStyles();

    // input value state
    const [value, setValue] = useState({})
    const [ccOpen, setCcOpen] = useState(false)
    const [bccOpen, setBccOpen] = useState(false)
    const [group, setGroup] = useState(false)
    const [tags, setTags] = useState(false)

    // check box state
    const [checkBox, setCheckBox] = useState({
        quickReply: false,
        // noReply: false,
        setRemainder: false,
        setDeadLine: false
    });

    // remainder date
    const date = new Date()
    const [remainderDate, setRemainderDate] = useState(date.setDate(date.getDate() + 1))
    console.log(remainderDate)
    const handleRemainderDate = (date) => {
        setRemainderDate(date.toDateString());
    };
    // deadline date
    const [deadlineDate, setDeadlineDate] = useState(date.setDate(date.getDate() + 2))
    console.log(deadlineDate)
    const handleDeadlineDate = (date) => {
        setDeadlineDate(date.toDateString());
    };

    // checkbox handle
    const handleChange = (event) => {
        setCheckBox({ ...checkBox, [event.target.name]: event.target.checked });
    };

    // input handle
    const handleInput = (e) => {
        e.preventDefault();
        const newValue = { ...value }
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }

    // compose button handle
    const handleCompose = (e) => {
        e.preventDefault()
        const finalValue = { ...value }
        finalValue.remainder = remainderDate
        finalValue.deadline = deadlineDate
        if (checkBox.quickReply) {
            finalValue.quickReply = "quick reply"
        }
        // if(checkBox.noReply) {
        //     finalValue.noReply = "no reply"
        // }
        console.log(finalValue);
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

                                                <TextField
                                                    id="subject"
                                                    name="subject"
                                                    onBlur={handleInput}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">Subject</InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                />
                                                {/* check boxes start */}

                                                <div>
                                                    <FormGroup row style={{ color: '#fff' }}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={checkBox.quickReply}
                                                                    onChange={handleChange}
                                                                    name="quickReply"
                                                                    style={{ color: '#4195D1' }}
                                                                />}
                                                            label="Quick Reply"
                                                        />
                                                        {/* <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={checkBox.noReply}
                                                                    onChange={handleChange}
                                                                    name="noReply"Z
                                                                    style={{ color: '#4195D1' }}
                                                                />
                                                            }
                                                            label="No Reply"
                                                        /> */}
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={checkBox.setRemainder}
                                                                    onChange={handleChange}
                                                                    name="setRemainder"
                                                                    style={{ color: '#4195D1' }}
                                                                />
                                                            }
                                                            label="Set Remainder"
                                                        />

                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={checkBox.setDeadLine}
                                                                    onChange={handleChange}
                                                                    name="setDeadLine"
                                                                    style={{ color: '#4195D1' }}
                                                                />
                                                            }
                                                            label="Set Deadline"
                                                        />
                                                    </FormGroup>

                                                </div>

                                                {/* check boxes end */}

                                                {/* fuctional check boxes show start */}

                                                <div className="d-flex">
                                                    {
                                                        checkBox.quickReply &&
                                                        <TextareaAutosize aria-label="quick reply" name="quickReplyComment" onBlur={handleInput} rowsMax={3} placeholder="Quick Reply ..." />
                                                    }
                                                    {
                                                        checkBox.setRemainder &&
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <Grid container justify="space-around">
                                                                <KeyboardDatePicker
                                                                    margin="normal"
                                                                    id="date-picker-dialog"
                                                                    label="Select Remainder"
                                                                    format="MM/dd/yyyy"
                                                                    disablePast="true"
                                                                    value={remainderDate}
                                                                    onChange={handleRemainderDate}
                                                                    style={{backgroundColor: '#fff'}}
                                                                    KeyboardButtonProps={{
                                                                        'aria-label': 'change date',
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </MuiPickersUtilsProvider>
                                                    }

                                                    {
                                                        checkBox.setDeadLine &&
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <Grid container justify="space-around">
                                                                <KeyboardDatePicker
                                                                    margin="normal"
                                                                    id="date-picker-dialog"
                                                                    label="Select Remainder"
                                                                    format="MM/dd/yyyy"
                                                                    disablePast="true"
                                                                    value={deadlineDate}
                                                                    onChange={handleDeadlineDate}
                                                                    style={{ backgroundColor: '#fff' }}
                                                                    KeyboardButtonProps={{
                                                                        'aria-label': 'change date',
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </MuiPickersUtilsProvider>
                                                    }

                                                    
                                                </div>

                                                {/* fuctional check boxes show end */}

                                                <SunEditor
                                                    width="100%"
                                                    placeholder="Details..."
                                                    name="editor"
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
                                            color="secondary"
                                            className={classes.btnStyle}
                                            onClick={handleCompose}
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