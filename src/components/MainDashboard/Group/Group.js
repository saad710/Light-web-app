import React, { useContext, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Button , ButtonGroup, FormControl, Input, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import { useStyles } from './GroupStyle';
import customerData from '../../../data/customerData';
import { Pagination } from '@material-ui/lab';

const Group = () => {
    const classes = useStyles();
    const [addGroup, setAddGroup] = useState({});
    const handleTeamInput = (e) => {
        const newGroup = { ...addGroup }
        newGroup[e.target.name] = e.target.value
        setAddGroup(newGroup)
    }

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <Typography className="pt-2" style={{ margin: ' 0 auto ' }} component="body1" variant="body1">
                                Create Groups
                            </Typography>
                            <div>
                                <form className={classes.form} noValidate>

                                    <div>
                                        <label htmlFor=""> Group Name </label>
                                        <TextField
                                            style={{ borderRadius: '4px' }}
                                            variant="standard"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="group"
                                            name="group"
                                            autoComplete="group"
                                            autoFocus
                                            placeholder="group-1, group-2"
                                            onChange={handleTeamInput}
                                        />
                                    </div>

                                    {/* <div class="form-group">
                                        <select class="form-control" id="role" name="role" onChange={handleTeamInput}>
                                            <option> mariewinter@gmail.com	 </option>
                                            <option> mariewinter@gmail.com	 </option>
                                            <option> mariewinter@gmail.com	 </option>
                                            <option> mariewinter@gmail.com	 </option>
                                            <option> mariewinter@gmail.com	 </option>
                                        </select>
                                    </div> */}

                                    <div>
                                        <FormControl className={classes.formControl} style={{margin: '0'}}>
                                            <InputLabel id="demo-mutiple-name-label">Add Contact</InputLabel>
                                            <Select
                                                labelId="demo-mutiple-name-label"
                                                id="demo-mutiple-name"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<Input />}
                                                MenuProps={MenuProps}
                                            >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>


                                    <Button
                                        style={{
                                                padding: '0.5rem 0',
                                                margin: '1rem 0',
                                                fontSize: '12px',
                                                border: '1px solid gray'
                                            }}
                                        type="submit"
                                        fullWidth
                                        variant="text"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Create GROUP
                                </Button>
                                </form>
                                <TableContainer component={Paper} square elevation={0} className="mt-4">
                                    <Table className={classes.table} aria-label="simple table"
                                        size='small'
                                    >
                                        <TableHead className={classes.tableHeader}>
                                            <TableRow>
                                                <TableCell> # </TableCell>
                                                <TableCell align="center"> GROUP NAME </TableCell>
                                                <TableCell align="center"> ACTION </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                customerData.map((customer, i) => (
                                                    <TableRow key={customer.id}>
                                                        <TableCell component="th" scope="row">
                                                            {i + 1}
                                                        </TableCell>
                                                        <TableCell align="center">{customer.group}</TableCell>
                                                        <TableCell align="right">
                                                            <div>
                                                                <ButtonGroup
                                                                    variant="contained"
                                                                    color="primary"
                                                                    size="small"
                                                                    aria-label="contained primary button group"
                                                                >
                                                                    <Button
                                                                         style={{ fontSize: '10px' }} color="primary">UPDATE</Button>
                                                                    <Button
                                                                        style={{ fontSize: '10px' }} color="secondary">DELETE</Button>
                                                                </ButtonGroup>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>

                                    </Table>
                                    <div className={classes.paginationBox}>
                                        <Pagination count={10} className={classes.pagination} />
                                    </div>

                                </TableContainer>
                            </div>
                        </div>
                    </Grid>
                    

                </Container>
            </main>
        </div>
    );
};

export default Group;