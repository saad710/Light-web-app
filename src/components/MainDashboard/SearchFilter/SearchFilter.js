import React, { useState } from 'react';
import { Container, CssBaseline, Divider, Grid, InputBase } from '@material-ui/core';
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

const SearchFilter = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const date = new Date()
    const [scheduleDate, setScheduleDate] = useState(date.setDate(date.getDate()))
    console.log("schedule date", scheduleDate);
    const handleScheduleDate = (date) => {
        setScheduleDate(date.toDateString());
    };
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className="input-group" style={{ width: '57rem' }}>
                            {/* <SearchIcon color="primary" /> */}
                            {/* <input type="text" className="form-control" placeholder="Search..."
                                style={{ borderRadius: '1rem' }}
                            /> */}
                            <div className={classes.search}>
                                <div className={classes.searchIcon} >
                                    <SearchIcon
                                    />
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
                            <div class="input-group-btn">
                                <div class="btn-group" role="group">
                                    <div class="dropdown dropdown-lg">
                                        <FilterListIcon
                                            color="primary"
                                            onClick={() => setOpenFilter(!openFilter)}
                                            type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"
                                        />
                                        {/* <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="caret"></span></button> */}
                                        <div class="dropdown-menu dropdown-menu-right" role="menu">
                                            <form class="form-horizontal" role="form">
                                                <SentFilter />
                                                <div>
                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        <Grid container justify="space-around">
                                                            <KeyboardDatePicker
                                                                margin="normal"
                                                                id="date-picker-dialog"
                                                                variant="inline"
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
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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