import { Backdrop, Button, ButtonGroup, Card, CardContent, Fade, FormControl, Input, InputLabel, MenuItem, Modal, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from '../../../apiKey';
import AppBarDrawer from '../AppBarDrawer';
import { useStyles } from './GroupStyle';

const Group = () => {
    const classes = useStyles();
    const [addGroup, setAddGroup] = useState({});
    const [groups, setGroups] = useState(null)
    const [updateEmail, setUpdateEmail] = useState([])
    const [updateValue, setUpdateValue] = useState({})
    const [showOldValue, setShowOldValue] = useState({})
    const [customers, setCustomers] = useState(null)
    const [singleClient, setSingleClinet] = useState({})

    const handleGroupInput = (e) => {
        const newGroup = { ...addGroup }
        newGroup[e.target.name] = e.target.value
        setAddGroup(newGroup)
    }
    // set emails from update 
    const handleUpdateChange = (e) => {
        setUpdateEmail(e.target.value)
    }
    
    // current logged in clients start
    useEffect(() => {
        Axios.get(`${key}clients`)
        .then(res => {
            const data = res.data
            const client = data.filter(clients => clients.email === localStorage.client)
            setSingleClinet(client[0])
        })
    }, [])

    // set emails for new group
    const [customerEmail, setCustomerEmail] = React.useState([]);
    console.log('person', customerEmail);

    const handleChange = (event) => {
        setCustomerEmail(event.target.value);
    };

    // load all customers
    useEffect(() => {
        Axios(`${key}customers`)
            .then(res => {
                const data = res.data
                setCustomers(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // create group
    const handleGroup = (e) => {
        e.preventDefault();
        const group_name = { ...addGroup}
        group_name.client_id = singleClient.id
        // group_name.customer_email = customerEmail.toString()
        group_name.customer_email = customerEmail
        console.log(group_name);
        Axios.post(`${key}create-group`, group_name)
            .then(res => {
                console.log(res);
                reFetch()
            })
            .catch(err => {
                console.log(err);
            })
    }

    // delete feature
    const handleGroupDelete = (id) => {
        Axios.delete(`${key}group-delete/${id}`)
            .then(res => {
                const finalGroup = groups.filter(newTag => newTag.id !== res.data.id)
                setGroups(finalGroup)
                reFetch()
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // get single clicked id
    const handleOldValue = (id) => {
        setShowOldValue(id)
    }

    // handle group update
    const handleUpdateTagInput = (e) => {
        const updateGroup = { ...updateValue, client_id : singleClient.id }
        updateGroup[e.target.name] = e.target.value
        setUpdateValue(updateGroup)
        e.preventDefault()
    }

    const handleUpdateSubmit = (e) => {
        const newGroup = { ...updateValue }
        newGroup.customer_email = updateEmail
        console.log(newGroup);
        Axios.put(`${key}group-update/${showOldValue}`, newGroup)
            .then((res) => {
                console.log(res.data);
                reFetch()
            })
            .catch((error) => console.log(error));
        e.preventDefault();
    }

    //get all 
    useEffect(() => {
        Axios.get(`${key}all-group`)
            .then(res => {
                const groups = res.data
                setGroups(groups)
            })
            .then(err => {
                console.log(err);
            })

    }, [])

    const reFetch = () => {
        Axios(`${key}all-group`)
            .then(res => {
                const groups = res.data
                setGroups(groups)
            })
            .then(err => {
                console.log(err);
            })
    }

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
                                            id="group_name"
                                            name="group_name"
                                            autoComplete="group"
                                            autoFocus
                                            placeholder="group-1"
                                            onChange={handleGroupInput}
                                        />
                                    </div>

                                    <div>
                                        <FormControl className={classes.formControl} style={{margin: '0'}}>
                                            <InputLabel id="demo-mutiple-name-label">Add Contact</InputLabel>
                                            <Select
                                                labelId="demo-mutiple-name-label"
                                                id="demo-mutiple-name"
                                                multiple
                                                value={customerEmail}
                                                onChange={handleChange}
                                                input={<Input />}
                                                MenuProps={MenuProps}
                                            >
                                                {customers !== null && customers.map((customer) => (
                                                    <MenuItem key={customer.id} value={`${customer.email}`}>
                                                        {customer.email}
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
                                        onClick={ handleGroup }
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
                                                {/* <TableCell align="center"> CUSTOMERS </TableCell> */}
                                                <TableCell align="center"> ACTION </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {   groups !== null &&
                                                groups.map((group, i) => (
                                                    <TableRow key={group.id}>
                                                        <TableCell component="th" scope="row">
                                                            {i + 1}
                                                        </TableCell>
                                                        <TableCell align="center">{group.group_name}</TableCell>
                                                        {/* <TableCell align="center">{group.customer_email}</TableCell> */}
                                                        <TableCell align="right">
                                                            <div>
                                                                <ButtonGroup
                                                                    variant="contained"
                                                                    color="primary"
                                                                    size="small"
                                                                    aria-label="contained primary button group"
                                                                >
                                                                    <Button
                                                                        onClick={() => { handleOpen(); handleOldValue(group.id) }}
                                                                        style={{ fontSize: '10px' }} color="primary" >UPDATE</Button>
                                                                    <Button
                                                                        style={{ fontSize: '10px' }} color="secondary" onClick={() => handleGroupDelete(group.id)}>DELETE</Button>
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
                                <div className={classes.customerPaper}>
                                    <div className="mt-3">
                                        <Card className={classes.cardRoot}>
                                            <CardContent style={{ background: 'none !important' }}>
                                                <div className={classes.paper}>
                                                    <div>
                                                        <FormControl className={classes.formControl} style={{ margin: '0' }}>
                                                            <div>
                                                                <label htmlFor=""> Group Name </label>
                                                                <TextField
                                                                    style={{ borderRadius: '4px' }}
                                                                    variant="standard"
                                                                    margin="normal"
                                                                    required
                                                                    fullWidth
                                                                    id="group_name"
                                                                    name="group_name"
                                                                    autoComplete="group"
                                                                    autoFocus
                                                                    placeholder="group-1"
                                                                    onChange={handleUpdateTagInput}
                                                                />
                                                            </div>
                                                            
                                                            <div>
                                                                <FormControl className={classes.formControl} style={{margin: '0'}}>
                                                                    <InputLabel id="demo-mutiple-name-label">Add Contact</InputLabel>
                                                                    <Select
                                                                        labelId="demo-mutiple-name-label"
                                                                        id="demo-mutiple-name"
                                                                        multiple
                                                                        value={updateEmail}
                                                                        onChange={handleUpdateChange}
                                                                        input={<Input />}
                                                                        MenuProps={MenuProps}
                                                                        autoWidth='true'
                                                                    >
                                                                        {groups !== null && groups.map((name) => (name.customer_email !== null && name.customer_email.map(email => (
                                                                                <MenuItem key={name.email} value={email} >
                                                                                    {showOldValue !== name.id && email}
                                                                                </MenuItem>
                                                                            ))
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
                                                                    onClick={handleUpdateSubmit}
                                                                    
                                                                >
                                                                    UPDATE GROUP
                                                            </Button>
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </Fade>
                        </Modal>

                    </Grid>
                    

                </Container>
            </main>
        </div>
    );
};

export default Group;