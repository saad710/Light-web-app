import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#fff'
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    table: {
        minWidth: 650,
        marginBottom: 20,
        fontSize: "0.7rem",
    },
    tableHeader: {
        fontSize: "7px",
    },
    btnStyle: {
        backgroundColor: '#fff',
        color: '#2d2d2d',
        borderRadius: 0,
        padding: '0.5rem 5rem',
    },
    // fixedHeight: {
    //     height: 240,
    // },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPaper: {
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: '#3A86BC'
    },
    customerPaper: {
        width: '50%',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: '#3A86BC'
    },
    cardRoot: {
        minWidth: 275,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#3A86BC',
        boxShadow: 'none'

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        textAlign: 'start'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#213F7E',
        borderRadius: '0',
        padding: '0.6rem 0'
    },
    paginationBox: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
    },
    pagination: {
        border: "1px solid #ddd",
        backgroundColor: "#eee",
    },
}));


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
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Button onClick={handelUserModelOpen} style={{ margin: '1rem auto' }} variant="contained" className={classes.btnStyle} >
                            CREATE NEW
                        </Button>
                        <TableContainer component={Paper} square elevation={0}>
                            <Table className={classes.table} aria-label="simple table"
                                size='small'
                            >
                                <TableHead className={classes.tableHeader}>
                                    <TableRow>
                                        <TableCell> # </TableCell>
                                        <TableCell align="center"> NAME </TableCell>
                                        <TableCell align="center"> EMAIL </TableCell>
                                        <TableCell align="center"> DESCRIPTION </TableCell>
                                        <TableCell align="center"> DATE OF PURCHASES </TableCell>
                                        <TableCell align="center"> DATE OF RENEWAL </TableCell>
                                        <TableCell align="center"> GROUP </TableCell>
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
                                                <TableCell align="center">{customer.description}</TableCell>
                                                <TableCell align="center">{customer.dateOfPurchase}</TableCell>
                                                <TableCell align="center">{customer.dateOfRenewwal}</TableCell>
                                                <TableCell align="center">{customer.group}</TableCell>
                                                <TableCell align="center">
                                                    <div>
                                                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                                            <Button onClick={handleOpen}>UPDATE</Button>
                                                            <Button onClick={handleOpen} style={{ backgroundColor: '#4195D1' }}>DELETE</Button>
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
                                                                autoFocus
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