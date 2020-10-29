import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Backdrop, Button, ButtonGroup, Card, CardContent, CardHeader, Fade, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import { useStyles } from './TicketStyle';
import customerData from '../../../data/customerData';
import { Pagination } from '@material-ui/lab';
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const Ticket = () => {
    const classes = useStyles();
    const [ticketModal, setTicketModal] = React.useState(false);
    const [ticketValue, setTicketValue] = useState({});

    const handleOpen = () => {
        setTicketModal(true);
    };
    const handleClose = () => {
        setTicketModal(false);
    };
    const handleBlur = (e) => {
        const value = { ...ticketValue };
        value[e.target.name] = e.target.value;
        setTicketValue(value);
    };

    const handleSubmit = (e) => {
        const finalValue = { ...ticketValue };
        console.log(finalValue);
        e.preventDefault();
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
                            <Button
                                onClick={handleOpen}
                                variant="contained"
                                color="primary"
                                style={{width: '25%', margin: '0 auto'}}
                            >
                                Add Ticket
                            </Button>
                            <div>
                                <TableContainer component={Paper} square elevation={0} className="mt-4">
                                    <Table className={classes.table} aria-label="simple table"
                                        size='small'
                                    >
                                        <TableHead className={classes.tableHeader}>
                                            <TableRow>
                                                <TableCell> ID </TableCell>
                                                <TableCell align="center"> SUBJECT </TableCell>
                                                <TableCell align="center"> DETAILS </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                customerData.map((customer, i) => (
                                                    <TableRow key={customer.id}>
                                                        <TableCell component="th" scope="row">
                                                            {i + 1}
                                                        </TableCell>
                                                        <TableCell align="center"> Lorem ipsum dolor. </TableCell>
                                                        <TableCell align="right">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

                            <div>
                                <Modal
                                    aria-labelledby='transition-modal-title'
                                    aria-describedby='transition-modal-description'
                                    className={classes.modal}
                                    open={ticketModal}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={ticketModal}>
                                        <div className={classes.modalPaper}>
                                            <div className='mt-3'>
                                                <Card className={classes.ticketCard}>
                                                    <CardHeader
                                                        action={
                                                            <IconButton
                                                                onClick={handleClose}
                                                                aria-label='settings'
                                                                style={{ color: "#2d2d2d" }}
                                                            >
                                                                <CancelOutlinedIcon />
                                                            </IconButton>
                                                        }
                                                    />
                                                    <CardContent>
                                                        <form className={classes.form} noValidate>
                                                            <div style={{ margin: "1rem 0" }}>
                                                                <TextField
                                                                    style={{ backgroundColor: "#fff" }}
                                                                    variant='outlined'
                                                                    margin='normal'
                                                                    required
                                                                    fullWidth
                                                                    id='name'
                                                                    name='name'
                                                                    autoComplete='name'
                                                                    autoFocus
                                                                    placeholder='Marie Winter'
                                                                    onBlur={handleBlur}
                                                                />
                                                            </div>
                                                            <div>
                                                                <TextField
                                                                    style={{ backgroundColor: "#fff" }}
                                                                    variant='outlined'
                                                                    margin='normal'
                                                                    required
                                                                    fullWidth
                                                                    id='email'
                                                                    name='email'
                                                                    autoComplete='email'
                                                                    autoFocus
                                                                    placeholder='user@email.com'
                                                                    onBlur={handleBlur}
                                                                />
                                                            </div>
                                                            <br />
                                                            <div>
                                                                <TextField
                                                                    style={{ backgroundColor: "#fff" }}
                                                                    variant='outlined'
                                                                    margin='normal'
                                                                    required
                                                                    fullWidth
                                                                    id='subject'
                                                                    name='subject'
                                                                    autoComplete='subject'
                                                                    autoFocus
                                                                    placeholder='Subject'
                                                                    onBlur={handleBlur}
                                                                />
                                                            </div>
                                                            <div className='mt-3'>
                                                                <TextareaAutosize
                                                                    style={{
                                                                        backgroundColor: "#fff",
                                                                        borderRadius: "0.2rem",
                                                                        height: "130px",
                                                                    }}
                                                                    variant='outlined'
                                                                    margin='normal'
                                                                    required
                                                                    width='100%'
                                                                    id='address'
                                                                    name='address'
                                                                    autoComplete='address'
                                                                    autoFocus
                                                                    aria-label='minimum height'
                                                                    rowsMin={3}
                                                                    placeholder='Details'
                                                                    onBlur={handleBlur}
                                                                />
                                                            </div>
                                                            <Button
                                                                type='submit'
                                                                fullWidth
                                                                variant='contained'
                                                                className={classes.ticketBtn}
                                                                onClick={handleSubmit}
                                                                style={{ marginTop: "1rem" }}
                                                            >
                                                                SEND
                                                            </Button>
                                                        </form>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                            </div>
                        </div>
                    </Grid>


                </Container>
            </main>
        </div>
    );
};

export default Ticket;