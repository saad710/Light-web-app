import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import customerData from '../../../data/customerData'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, ButtonGroup, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import avatar from '../../../images/avatar.png'
import { Pagination } from "@material-ui/lab";
import ToolBar from '../ToolBar/ToolBar';
import { useStyles } from './CustomersStyle';

const Customers = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [userModelOpen, setUserModelOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handelUserModelOpen = () => {
        setUserModelOpen(true)
    }
    const handelUserModelClise = () => {
        setUserModelOpen(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <ToolBar />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Button onClick={handelUserModelOpen} style={{ margin: '1rem auto' }} variant="contained" className={classes.btnStyle} >
                            CREATE NEW
                        </Button>
                        <TableContainer component={Paper} square elevation={0} className="mt-4">
                            <Table className={classes.table} aria-label="simple table"
                                size='small'
                            >
                                <TableHead className={classes.tableHeader}>
                                    <TableRow>
                                        <TableCell> # </TableCell>
                                        <TableCell align="center"> NAME </TableCell>
                                        <TableCell align="center"> EMAIL </TableCell>
                                        <TableCell align="center"> PHONE </TableCell>
                                        <TableCell align="center"> GROUP </TableCell>
                                        <TableCell align="center"> PHYSICAL ADDRESS </TableCell>
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
                                                <TableCell align="center">{customer.name}</TableCell>
                                                <TableCell align="center">{customer.email}</TableCell>
                                                <TableCell align="center"> +33 343 4545 23</TableCell>
                                                <TableCell align="center">{customer.group}</TableCell>
                                                <TableCell align="center"> 4670  Charles Street, FORT WAYNE </TableCell>
                                                <TableCell align="center">
                                                    <div>
                                                        <ButtonGroup
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            aria-label="contained primary button group"
                                                        >
                                                            <Button
                                                                style={{fontSize: '10px'}} color="secondary">DELETE</Button>
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
                        

                        {/* update/delete modal */}

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
                                <div className={classes.modalPaper}>
                                    <div className="mt-3">
                                        <Card className={classes.cardRoot}>
                                            <img className="pt-2" width="50%" src={avatar} alt="" />
                                            <CardContent style={{ background: 'none !important' }}>
                                                <Typography variant="body2">
                                                    Marie Winter
                                                                    </Typography>
                                                <Typography variant="body6">
                                                    mariewinter@mail.com
                                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </Fade>
                        </Modal>


                        {/* create user modal  */}

                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={userModelOpen}
                            onClose={handelUserModelClise}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={userModelOpen}>
                                <div className={classes.customerPaper}>
                                    <div className="mt-3">
                                        <Card className={classes.cardRoot}>
                                            <CardContent style={{ background: 'none !important' }}>
                                                
                                                <div className={classes.paper}>
                                                    <Typography component="body6" variant="body6">
                                                        CREATE CUSTOMER ACCOUNT
                                                    </Typography>
                                                    <form className={classes.form} noValidate>
                                                        <div style={{ margin: '1rem 0' }}>
                                                            <label htmlFor=""> Name </label>
                                                            <TextField
                                                                style={{ backgroundColor: '#fff' }}
                                                                variant="outlined"
                                                                margin="normal"
                                                                required
                                                                fullWidth
                                                                id="name"
                                                                name="name"
                                                                autoComplete="name"
                                                                autoFocus
                                                                placeholder="Marie Winter"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor=""> Email </label>
                                                            <TextField
                                                                style={{ backgroundColor: '#fff' }}
                                                                variant="outlined"
                                                                margin="normal"
                                                                required
                                                                fullWidth
                                                                id="email"
                                                                name="email"
                                                                autoComplete="email"
                                                                autoFocus
                                                                placeholder="user@email.com"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor=""> Phone </label>
                                                            <TextField
                                                                style={{ backgroundColor: '#fff' }}
                                                                variant="outlined"
                                                                margin="normal"
                                                                required
                                                                fullWidth
                                                                id="phone"
                                                                name="phone"
                                                                autoComplete="phone"
                                                                autoFocus
                                                                placeholder="+33 43 3434 44"
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor=""> Group </label>
                                                            <TextField
                                                                style={{ backgroundColor: '#fff' }}
                                                                variant="outlined"
                                                                margin="normal"
                                                                required
                                                                fullWidth
                                                                id="group"
                                                                name="group"
                                                                autoComplete="group"
                                                                autoFocus
                                                                placeholder="grooup name"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor=""> Physical Address </label>
                                                            <br/>
                                                            <TextareaAutosize
                                                                style={{ backgroundColor: '#fff' }}
                                                                variant="outlined"
                                                                margin="normal"
                                                                required
                                                                width="100%"
                                                                id="address"
                                                                name="address"
                                                                autoComplete="address"
                                                                aria-label="minimum height"
                                                                rowsMin={3}
                                                                placeholder="Physical Address"
                                                            />
                                                        </div>
                                                        <div className="mt-3">
                                                            <label htmlFor=""> Password </label>
                                                            <TextField
                                                                style={{ backgroundColor: '#fff' }}
                                                                variant="outlined"
                                                                margin="normal"
                                                                required
                                                                fullWidth
                                                                name="password"
                                                                type="password"
                                                                id="password"
                                                                autoComplete="current-password"
                                                                placeholder="***********"
                                                            />
                                                        </div>
                                                        <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            color="primary"
                                                            className={classes.submit}
                                                        >
                                                            CREATE USER
                                                        </Button>
                                                    </form>
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

export default Customers;