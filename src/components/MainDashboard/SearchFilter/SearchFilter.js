import React, { useState } from 'react';
import { Checkbox, Container, CssBaseline, Divider, FormControlLabel, FormGroup, Grid, InputBase, ListItemIcon } from '@material-ui/core';
import { useStyles } from './SearchFilterStyle';
import './SearchFilter.css'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import SentFilter from '../SentFilter/SentFilter';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import './SearchFilter.css'

const SearchFilter = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const date = new Date()
    const [scheduleDate, setScheduleDate] = useState(date.setDate(date.getDate()))
    console.log("schedule date", scheduleDate);
    const handleScheduleDate = (date) => {
        setScheduleDate(date.toDateString());
    };
    // check box state
    const [checkBox, setCheckBox] = useState({
        quickReply: false,
        // noReply: false,
        setRemainder: false,
        setDeadLine: false
    });

    // checkbox handle
    const handleChange = (event) => {
        setCheckBox({ ...checkBox, [event.target.name]: event.target.checked });
    };

    const handleDate = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className="input-group" style={{ width: '56rem' }}>
                            {/* <SearchIcon color="primary" /> */}
                            {/* <input type="text" className="form-control" placeholder="Search..."
                                style={{ borderRadius: '1rem' }}
                                /> */}
                            <div className={classes.search}>
                                <div className={classes.searchIcon} >
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    style={{ color: '#2d2d2d' }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                            <FormGroup row style={{ color: '#2d2d2d', marginLeft:'4rem' }} className="d-flex flex-row">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checkBox.quickReply}
                                            onChange={handleChange}
                                            size="small"
                                            name="quickReply"
                                            style={{ color: '#4195D1' }}
                                        />}
                                    label="Quick Reply"
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
                                    label="No Reply"
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
                                    label="Schedule Date"
                                />

                                <div className="pb-2" style={{color: '#2d2d2d'}}>
                                    <input onBlur={handleDate} name="date" type="date" className="dateInput"
                                        style={{ 
                                            color: '#2d2d2d',
                                            marginTop: '0.2rem',
                                            border: '1px solid gray',
                                            padding: '5px 6px',
                                            borderRadius: '0.5rem'
                                        }}
                                    />
                                </div>

                                
                            </FormGroup>
                        </div>
                    </Grid>
                </Container>
            </main>
            <Container>

            </Container>
        </React.Fragment>
    );
};

export default SearchFilter;