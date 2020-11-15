import { Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from '../../../apiKey';
import AppBarDrawer from '../AppBarDrawer';
import { useStyles } from './TeamStyle';


const Team = () => {
    const classes = useStyles();
    const [admin, setAdmin] = useState({});
    console.log(admin);
    const [allAdmin, setAllAdmin] = useState(null)
    
    const handleTeamInput = (e) => {
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value 
        newAdmin.role = 'Admin'
        setAdmin(newAdmin)
    }

    //get all admin
    useEffect(() => {
        Axios(`${key}all-admin`)
            .then(res => {
                const admin = res.data
                setAllAdmin(admin)
            })
            .then(err => {
                console.log(err);
            })
    }, [])

    const reFetch = () => {
        Axios(`${key}tag-all`)
            .then(res => {
                const admin = res.data
                setAllAdmin(admin)
            })
            .then(err => {
                console.log(err);
            })
    }

    const handleAdminDelete = (id) => {
        Axios.delete(`${key}admin-remove/${id}`)
            .then(res => {
                console.log(res.data);
                // const adminData = allAdmin.filter(admin => admin.id !== res.data.id)
                // setAllAdmin(adminData)
                reFetch()
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    
    const handleAdmin = (e) => {
        e.preventDefault();
        const adminData = { ...admin }
        console.log(adminData);
        Axios.post(`${key}admin-create`, adminData)
            .then(res => {
                reFetch()
            })
            .catch(err => {
                console.log(err);
            })
    }

    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <Typography className="pt-2" style={{ margin: ' 0 auto ' }} component="body2" variant="body2">
                                Add Admin
                            </Typography>
                            <form className={classes.form} noValidate>
                                
                                <div>
                                    <label> Name </label>
                                    <TextField
                                        style={{ borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        autoFocus
                                        placeholder="Marie Winter"
                                        onChange={handleTeamInput}
                                    />
                                </div>

                                <div>
                                    <label> Email </label>
                                    <TextField
                                        style={{ borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        placeholder="user@email.com"
                                        onChange={handleTeamInput}
                                    />
                                </div>
                                {/* <div>
                                    <label> Role </label>
                                    <TextField
                                        style={{ borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="role"
                                        name="role"
                                        autoFocus
                                        defaultValue="role"
                                        onChange={() => handleTeamInput()}
                                    />
                                </div> */}

                                <div>
                                    <label> Password </label>
                                    <TextField
                                        style={{ borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password"
                                        name="password"
                                        autoComplete="password"
                                        autoFocus
                                        placeholder="*************"
                                        onChange={handleTeamInput}
                                    />
                                </div>
                                {/* <div>
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="demo-customized-select-native">Select Role</InputLabel>
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            name="select"
                                            value={teamRole.select}
                                            onChange={handleTeamInput}
                                            input={<BootstrapInput />}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="client">Client</option>
                                            <option value="admin">Admin</option>
                                        </NativeSelect>
                                    </FormControl>

                                </div> */}

                                {/* <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select Role</label>
                                    <select class="form-control" id="role" name="role" onChange={handleTeamInput}>
                                        <option> Admin </option>
                                        <option> Super Admin </option>
                                    </select>
                                </div> */}
                                
                                <Button
                                    style={{ padding: '0.6rem 0', margin: '1rem 0' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAdmin}
                                    className={classes.submit}
                                >
                                    ADD ADMIN
                                </Button>
                            </form>

                            <TableContainer component={Paper} square elevation={0} className="mt-4">
                                <Table className={classes.table} aria-label="simple table"
                                    size='small'
                                >
                                    <TableHead className={classes.tableHeader}>
                                        <TableRow>
                                            <TableCell> # </TableCell>
                                            <TableCell align="center"> NAME </TableCell>
                                            <TableCell align="center"> EMAIL </TableCell>
                                            <TableCell align="center"> ACTION </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {   allAdmin !== null &&
                                            allAdmin.map((admin, i) => (
                                                <TableRow key={admin.id}>
                                                    <TableCell component="th" scope="row">
                                                        {i + 1}
                                                    </TableCell>
                                                    <TableCell align="center"> { admin.name } </TableCell>
                                                    <TableCell align="center"> { admin.email } </TableCell>
                                                    <TableCell align="right">
                                                        <div>
                                                            <ButtonGroup
                                                                variant="contained"
                                                                color="primary"
                                                                size="small"
                                                                aria-label="contained primary button group"
                                                                onClick={() => handleAdminDelete(admin.id) }
                                                            >
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
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Team;