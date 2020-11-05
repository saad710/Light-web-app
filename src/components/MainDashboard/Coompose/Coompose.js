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
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';

const Coompose = () => {
    const classNamees = useStyles();

    // input value state
    const [value, setValue] = useState({})
    const [ccOpen, setCcOpen] = useState(false)
    const [bccOpen, setBccOpen] = useState(false)
    const [group, setGroup] = useState(false)
    const [tags, setTags] = useState(false)

    console.log('final value', value)
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

    // 2nd 3rd remainder
    const [remainder2, setRemainder2] = useState(false)
    const [remainder3, setRemainder3] = useState(false)
    
    // deadline date

    const [deadlineDate, setDeadlineDate] = useState(date.setDate(date.getDate() + 2))
    console.log(deadlineDate)
    const handleDeadlineDate = (date) => {
        setDeadlineDate(date.toDateString());
    };

    // 2nd 3rd deadline
    const [deadline2, setDeadline2] = useState(false)
    const [deadline3, setDeadline3] = useState(false)

    // schedule date
    const [scheduleDate, setScheduleDate] = useState(date.setDate(date.getDate() + 1))
    console.log("schedule date",scheduleDate);
    const handleScheduleDate = (date) => {
        const scheduleDate = { ...value }
        scheduleDate.schedule = date.toDateString()
        setScheduleDate(scheduleDate);
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
    const handleBlur = (event) => {
        console.log({ editorValue: event });
    }
    const handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
        console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
    }

    const handleImageUploadBefore = (files, info, uploadHandler) => {
        // uploadHandler is a function
        console.log(files, info)
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
                                                                            value={remainderDate}
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
                                                                            value={remainderDate}
                                                                            onChange={handleRemainderDate}
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
                                                                            value={remainderDate}
                                                                            onChange={handleRemainderDate}
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
                                                                {
                                                                    deadline2 !== true ?
                                                                        <AddBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setDeadline2(!deadline2)} />
                                                                        :
                                                                        <IndeterminateCheckBoxRoundedIcon style={{ color: '#fff' }} fontSize="large" onClick={() => setDeadline2(!deadline2)} />
                                                                }
                                                            </div>
                                                            {
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
                                                            }
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
                                                            ['link', 'image', 'video',],
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

                                        <div className="btn-group" style={{marginLeft: '38rem', marginTop:'1rem'}}>
                                            <button type="button" className="btn btn-primary"
                                                style={{ backgroundColor: '#4195D1', padding: '0.5rem 1.5rem'}}
                                                onClick={handleCompose}
                                            >
                                                Send
                                            </button>
                                            <button type="button" 
                                                style={{ backgroundColor: '#4195D1', padding: '0.5rem 0.4rem'}}
                                            className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </button>
                                            <div className="dropdown-menu" style={{ backgroundColor: '#4195D1', padding: '0.5rem 0.4rem', color: '#fff', cursor: 'pointer' }}>
                                                <Typography variant="body2" onClick={handleOpen}> Schedule Sent </Typography>
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