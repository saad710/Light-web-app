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
import { DateTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';


const Coompose = () => {
    const classNamees = useStyles();

    // input value state
    const [value, setValue] = useState({})
    const [mailBody, setMailBody] = useState({})

    const [schduleTime, setSchduleTime] = useState("")

    const [ccOpen, setCcOpen] = useState(false)
    const [bccOpen, setBccOpen] = useState(false)
    const [group, setGroup] = useState(false)
    const [tags, setTags] = useState(false)

    console.log('final value', value)
    // check box state
    const [checkBox, setCheckBox] = useState({
        quickReply: false,
        hideContactInfo: false,
        // noReply: false,
        replyNeeded: false,
        setRemainder: false,
        setDeadLine: false
    });

    // *** remainder all functionality start *** //
    const date = new Date()
    const [remainderDate1, setRemainderDate1] = useState(date.setDate(date.getDate() + 1))
    console.log("remainder1", remainderDate1);
    const handleRemainderDate = (date) => {
        setRemainderDate1(date.toDateString());
    };

    const [remainderDate2, setRemainderDate2] = useState(date.setDate(date.getDate() + 2))
    console.log("remainder2", remainderDate2);
    const handleRemainderDate2 = (date) => {
        setRemainderDate2(date.toDateString());
    };

    const [remainderDate3, setRemainderDate3] = useState(date.setDate(date.getDate() + 3))
    console.log("remainder3", remainderDate3);
    const handleRemainderDate3 = (date) => {
        setRemainderDate3(date.toDateString());
    };

    // 2nd 3rd remainder/multiple remainder opener
    const [remainder2, setRemainder2] = useState(false)
    const [remainder3, setRemainder3] = useState(false)


    // *** remainder all functionality close *** //

    // deadline date

    const [deadlineDate, setDeadlineDate] = useState(date.setDate(date.getDate() + 2))
    console.log(deadlineDate)
    const handleDeadlineDate = (date) => {
        setDeadlineDate(date.toDateString());
    };

    // 2nd 3rd quick reply

    const [quickReply1, setQuickReply1] = useState(false)
    const [quickReply2, setQuickReply2] = useState(false)


    // schedule date start

    const [scheduleDate, setScheduleDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setScheduleDate(date);
    };

    // schedule date end

    // checkbox handle
    const handleChange = (event) => {
        setCheckBox({ ...checkBox, [event.target.name]: event.target.checked });
    };

    // input handle
    const handleInput = (e) => {
        e.preventDefault();
        const newValue = { ...value}
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }

    // schdule time handle
    const handleSetSchduleTime = (e) => {
        e.preventDefault()
        const newTime = { ...schduleTime }
        newTime[e.target.name] = e.target.value
        setSchduleTime(newTime)
    } 

    // compose button handle
    const handleCompose = (e) => {
        e.preventDefault()
        const finalValue = { ...value, ...mailBody}
        if(checkBox.setRemainder) 
            finalValue.remainder1 = remainderDate1
        if(remainder2) {
            finalValue.remainder2 = remainderDate2
        }
        if(remainder3) {
            finalValue.remainder3 = remainderDate3
        }
        if (checkBox.setDeadLine) {
            finalValue.deadline = deadlineDate
        }
        if (checkBox.quickReply) {
            finalValue.quickReply = true
        }
        if (!checkBox.quickReply) {
            finalValue.quickReply = false
        }
        if (checkBox.replyNeeded) {
            finalValue.replyNeeded = true
        }
        if (!checkBox.replyNeeded) {
            finalValue.replyNeeded = false
        }
        if(checkBox.hideContactInfo) {
            finalValue.hideContactInfo = true
        }
        if(!checkBox.hideContactInfo) {
            finalValue.hideContactInfo = false
        }
        // if(checkBox.noReply) {
        //     finalValue.noReply = "no reply"
        // }
        console.log(finalValue);
    }

    // handle set schdule start

    const handleSetSchdule = (e) => {
        e.preventDefault()

        const schduleValue = { ...value, ...mailBody, ...schduleTime }
        if (checkBox.setRemainder)
            schduleValue.remainder1 = remainderDate1
        if (remainder2) {
            schduleValue.remainder2 = remainderDate2
        }
        if (remainder3) {
            schduleValue.remainder3 = remainderDate3
        }
        if (checkBox.setDeadLine) {
            schduleValue.deadline = deadlineDate
        }
        if (checkBox.quickReply) {
            schduleValue.quickReply = true
        }
        if (!checkBox.quickReply) {
            schduleValue.quickReply = false
        }
        if (checkBox.replyNeeded) {
            schduleValue.replyNeeded = true
        }
        if (!checkBox.replyNeeded) {
            schduleValue.replyNeeded = false
        }
        if (checkBox.hideContactInfo) {
            schduleValue.hideContactInfo = true
        }
        if (!checkBox.hideContactInfo) {
            schduleValue.hideContactInfo = false
        }
        schduleValue.schduleDate = scheduleDate.toLocaleDateString()
        // schduleValue.schduleTime = schduleTime

        console.log('clicked hyse', schduleValue);
    }

    // handle set schdule end

    const [dateValue, onChange] = useState(new Date());

    // modal handle with state start
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // // modal handle with state end

    const handleBlur = (event) => {
        // console.log({ editorValue: event });
        const mail_body = {mail_body: event}
        setMailBody(mail_body)
    }
    const handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
        console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
    }


    return (
        <div className={classNamees.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classNamees.content}>
                <div className={classNamees.appBarSpacer} />
                <Container maxWidth="md" className={classNamees.container}>
                    <Grid container spacing={3}>
                        <div className={classNamees.paper}>
                            <Card style={{ margin: '0 auto', background: '#213F7E' }}>
                                <CardHeader
                                />
                                <CardContent>
                                    <form className={classNamees.form} noValidate>

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
                                                                <div className="d-flex" style={{ position: 'absolute', left: '68%' }}>
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
                                                    <FormGroup row style={{ color: '#fff' }} className="d-flex justify-content-between">

                                                        <div className="d-flex flex-column">
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={checkBox.replyNeeded}
                                                                        onChange={handleChange}
                                                                        name="replyNeeded"
                                                                        style={{ color: '#4195D1' }}
                                                                    />
                                                                }
                                                                label="Reply Needed"
                                                            />

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
                                                        </div>

                                                        <div className="d-flex flex-column">
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={checkBox.hideContactInfo}
                                                                        onChange={handleChange}
                                                                        name="hideContactInfo"
                                                                        style={{ color: '#4195D1' }}
                                                                    />
                                                                }
                                                                label="Hide Contact Info"
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
                                                        </div>
                                                    </FormGroup>

                                                </div>

                                                {/* check boxes end */}

                                                {/* fuctional check boxes show start */}

                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        {
                                                            checkBox.setRemainder &&
                                                            <div className="d-flex align-items-center">
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <Grid container justify="space-around">
                                                                        <KeyboardDatePicker
                                                                            margin="normal"
                                                                            id="date-picker-dialog"
                                                                            label="Remainder"
                                                                            format="MM/dd/yyyy"
                                                                            disablePast="true"
                                                                            value={remainderDate1}
                                                                            onChange={handleRemainderDate}
                                                                            style={{ backgroundColor: '#fff' }}
                                                                            KeyboardButtonProps={{
                                                                                'aria-label': 'change date',
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </MuiPickersUtilsProvider>
                                                                {
                                                                    remainder2 !== true ?
                                                                        <AddBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setRemainder2(!remainder2)} />
                                                                        :
                                                                        <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setRemainder2(!remainder2)} />
                                                                }
                                                            </div>
                                                        }
                                                        {
                                                            remainder2 &&
                                                            <div className="d-flex align-items-center">
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <Grid container justify="space-around">
                                                                        <KeyboardDatePicker
                                                                            margin="normal"
                                                                            id="date-picker-dialog"
                                                                            label="Remainder"
                                                                            format="MM/dd/yyyy"
                                                                            disablePast="true"
                                                                            value={remainderDate2}
                                                                            onChange={handleRemainderDate2}
                                                                            style={{ backgroundColor: '#fff' }}
                                                                            KeyboardButtonProps={{
                                                                                'aria-label': 'change date',
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </MuiPickersUtilsProvider>
                                                                {
                                                                    remainder3 !== true ?
                                                                        <AddBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setRemainder3(!remainder3)} />
                                                                        :
                                                                        <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setRemainder3(!remainder3)} />
                                                                }
                                                            </div>
                                                        }
                                                        {
                                                            remainder3 &&
                                                            <div className="d-flex align-items-center">
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <Grid container justify="space-around">
                                                                        <KeyboardDatePicker
                                                                            margin="normal"
                                                                            id="date-picker-dialog"
                                                                            label="Remainder"
                                                                            format="MM/dd/yyyy"
                                                                            disablePast="true"
                                                                            value={remainderDate3}
                                                                            onChange={handleRemainderDate3}
                                                                            style={{ backgroundColor: '#fff' }}
                                                                            KeyboardButtonProps={{
                                                                                'aria-label': 'change date',
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </MuiPickersUtilsProvider>
                                                                <AddBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" />
                                                            </div>
                                                        }
                                                    </div>

                                                    {
                                                        checkBox.setDeadLine &&
                                                        <div>
                                                            <div className="d-flex align-items-center">
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <Grid container justify="space-around">
                                                                        <KeyboardDatePicker
                                                                            margin="normal"
                                                                            id="date-picker-dialog"
                                                                            label="deadline"
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
                                                                {/* {
                                                                    deadline2 !== true ?
                                                                        <AddBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setDeadline2(!deadline2)} />
                                                                        :
                                                                        <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setDeadline2(!deadline2)} />
                                                                } */}
                                                            </div>
                                                            {/* {
                                                                deadline2 &&
                                                                <div className="d-flex align-items-center">
                                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                        <Grid container justify="space-around">
                                                                            <KeyboardDatePicker
                                                                                margin="normal"
                                                                                id="date-picker-dialog"
                                                                                label="deadline"
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
                                                                    {
                                                                        deadline3 !== true ?
                                                                            <AddBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setDeadline3(!deadline3)} />
                                                                            :
                                                                            <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setDeadline3(!deadline3)} />
                                                                    }
                                                                </div>
                                                            }

                                                            {
                                                                deadline3 &&
                                                                <div className="d-flex align-items-center">
                                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                        <Grid container justify="space-around">
                                                                            <KeyboardDatePicker
                                                                                margin="normal"
                                                                                id="date-picker-dialog"
                                                                                label="deadline"
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
                                                                    <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setDeadline3(!deadline3)} />
                                                                </div>
                                                            } */}
                                                        </div>
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
                                                            ['link','image'],
                                                            ['fullScreen', 'codeView'],
                                                        ]
                                                    }}
                                                    onChange={handleBlur}
                                                    onImageUpload={handleImageUpload}
                                                />

                                            </FormControl>
                                        </div>


                                        {/* <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="secondary"
                                            className={classNamees.btnStyle}
                                            onClick={handleCompose}
                                        >
                                            Send
                                        </Button> */}
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <div>
                                                    <FormControlLabel
                                                        style={{ color: '#fff' }}
                                                        control={
                                                            <Checkbox
                                                                checked={checkBox.quickReply}
                                                                onChange={handleChange}
                                                                name="quickReply"
                                                                style={{ color: '#4195D1' }}
                                                            />}
                                                        label="Quick Reply"
                                                    />
                                                </div>
                                                <div>
                                                    {
                                                        checkBox.quickReply &&
                                                        <div className="d-flex align-items-center">
                                                            <TextareaAutosize aria-label="quick reply" name="quickReplyComment1" onBlur={handleInput} rows={2} placeholder="Quick Reply ..." />
                                                            <div>
                                                                {
                                                                    quickReply1 !== true ?
                                                                        <AddBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setQuickReply1(!quickReply1)} />
                                                                        :
                                                                        <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setQuickReply1(!quickReply1)} />
                                                                }
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div >
                                                    {
                                                        quickReply1 &&
                                                        <div className="d-flex align-items-center">
                                                            <TextareaAutosize aria-label="quick reply" name="quickReplyComment2" onBlur={handleInput} rows={2} placeholder="Quick Reply ..." />
                                                            <div>
                                                                {
                                                                    quickReply2 !== true ?
                                                                        <AddBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setQuickReply2(!quickReply2)} />
                                                                        :
                                                                        <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setQuickReply2(!quickReply2)} />
                                                                }
                                                            </div>
                                                        </div>

                                                    }
                                                </div>

                                                {
                                                    quickReply2 &&
                                                    <div className="d-flex align-items-center">
                                                        <TextareaAutosize aria-label="quick reply" name="quickReplyComment3" onBlur={handleInput} rows={2} placeholder="Quick Reply ..." />
                                                        <div>
                                                            {

                                                                <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setQuickReply2(!quickReply2)} />
                                                            }
                                                        </div>
                                                    </div>

                                                }

                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary"
                                                    style={{ backgroundColor: '#4195D1', padding: '0.5rem 1.5rem' }}
                                                    onClick={handleCompose}
                                                >
                                                    Send
                                                </button>
                                                <button type="button"
                                                    style={{ backgroundColor: '#4195D1', padding: '0.5rem 0.4rem' }}
                                                    className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                </button>
                                                <div className="dropdown-menu" id="schedule-sent-droupdown" style={{ backgroundColor: '#4195D1', padding: '0.5rem 0.4rem', color: '#fff', cursor: 'pointer' }}>
                                                    <Typography variant="body2" onClick={handleOpen}> Schedule Sent </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* calender popup for schedule mail */}

                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classNamees.modal}
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
                                            <div className="">
                                                <Grid container justify="space-around">
                                                    {/* <KeyboardDatePicker
                                                        margin="normal"
                                                        id="date-picker-dialog"
                                                        variant="static"
                                                        label="Select Remainder"
                                                        format="MM/dd/yyyy"
                                                        disablePast="true"
                                                        value={scheduleDate}
                                                        onChange={scheduleDate}
                                                        style={{ backgroundColor: '#fff' }}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    /> */}

                                                    <KeyboardDatePicker
                                                        margin="normal"
                                                        id="date-picker-dialog"
                                                        label="Date picker dialog"
                                                        format="MM/dd/yyyy"
                                                        value={scheduleDate}
                                                        onChange={handleDateChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                        variant="static"
                                                    />
                                                </Grid>
                                                <Grid container justify="space-around">
                                                    <TextField
                                                        style={{ color: '#fff', backgroundColor: '#fff', width: "100%", border: '1px solid gray' }}
                                                        id="time"
                                                        label="Select Time"
                                                        type="time"
                                                        name="schduleTime"
                                                        onBlur={handleSetSchduleTime}
                                                        defaultValue="07:30"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        inputProps={{
                                                            step: 300, // 5 min
                                                        }}
                                                    />
                                                </Grid>
                                                <Button onClick={handleSetSchdule} variant="contained" color="primary" fullWidth> SET SCHEDULE </Button>
                                            </div>

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