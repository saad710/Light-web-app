import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Backdrop, Button, Card, CardContent, CardHeader, Checkbox, Fade, FormControl, FormControlLabel, FormGroup, InputAdornment, Modal, TextareaAutosize, TextField, Typography } from '@material-ui/core';
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
    const handleRemainderDate = (date) => {
        setRemainderDate(date.toDateString());
    };
    
    // deadline date

    const [deadlineDate, setDeadlineDate] = useState(date.setDate(date.getDate() + 2))
    console.log(deadlineDate)
    const handleDeadlineDate = (date) => {
        setDeadlineDate(date.toDateString());
    };

    // schedule date
    const [scheduleDate, setScheduleDate] = useState(date.setDate(date.getDate() + 1))
    console.log("schedule date",scheduleDate);
    const handleScheduleDate = (date) => {
        setScheduleDate(date.toDateString());
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

    // modal handle with state

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                                                        <TextareaAutosize aria-label="quick reply" name="quickReplyComment" onBlur={handleInput} rowsMax={4} placeholder="Quick Reply ..." />
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


                                        {/* <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="secondary"
                                            className={classes.btnStyle}
                                            onClick={handleCompose}
                                        >
                                            Send
                                        </Button> */}

                                        <div class="btn-group" style={{marginLeft: '38rem', marginTop:'1rem'}}>
                                            <button type="button" class="btn btn-primary"
                                                style={{ backgroundColor: '#4195D1', padding: '0.5rem 1.5rem'}}
                                                onClick={handleCompose}
                                            >
                                                Send
                                            </button>
                                            <button type="button" 
                                                style={{ backgroundColor: '#4195D1', padding: '0.5rem 0.4rem'}}
                                            class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </button>
                                            <div class="dropdown-menu" style={{ backgroundColor: '#4195D1', padding: '0.5rem 0.4rem', color: '#fff' }}>
                                                <Typography variant="body2" onClick={handleOpen}> Schedule Sent </Typography>
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <div>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    variant="static"
                                                    label="Select Remainder"
                                                    format="MM/dd/yyyy"
                                                    disablePast="true"
                                                    value={scheduleDate}
                                                    onChange={handleScheduleDate}
                                                    style={{ backgroundColor: '#fff' }}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </Fade>
                            </Modal>
                        </div>
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default Coompose;