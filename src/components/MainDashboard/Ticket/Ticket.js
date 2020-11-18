import { Backdrop, Button, Card, CardContent, CardHeader, Fade, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { Pagination } from '@material-ui/lab';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from '../../../apiKey';
import AppBarDrawer from '../AppBarDrawer';
import { useStyles } from './TicketStyle';

const Ticket = () => {
    const classes = useStyles();
    const [ticketModal, setTicketModal] = React.useState(false);
    const [ticketDetails, setTicketDetails] = React.useState(false);
    const [ticketValue, setTicketValue] = useState({});
    const [tickets, setTickets] = useState(null)

    const handleOpen = () => {
        setTicketModal(true);
    };
    const handleClose = () => {
        setTicketModal(false);
    };

    const handleDetailsOpen = () => {
        setTicketDetails(true);
    };
    const handleDetailsClose = () => {
        setTicketDetails(false);
    };

    const handleBlur = (e) => {
        const value = { ...ticketValue };
        console.log(value);
        value[e.target.name] = e.target.value;
        setTicketValue(value);
    };

    const handleSubmit = (e) => {
        const createTicket = { ...ticketValue };
        createTicket.client_id = 1
        createTicket.date = '11/11/21'
        // createTicket.status = 'pending'
        // createTicket.type = 'idk'
        // createTicket.ticket_id = 2
        console.log(createTicket);
        Axios.post(`${key}create-ticket`, createTicket)
            .then(res => {
                console.log(res);
                reFetch()
            })
            .catch(err => {
                console.log(err);
            })

        e.preventDefault();
    };
    useEffect(() => {
        Axios(`${key}all-ticket`)
            .then(res => {
                const tickets = res.data
                setTickets(tickets)
            })
            .then(err => {
                console.log(err);
            })
    }, [])
    const reFetch = () => {
        Axios(`${key}all-ticket`)
            .then(res => {
                const tickets = res.data
                setTickets(tickets)
            })
            .then(err => {
                console.log(err);
            })
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
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
                                                <TableCell align="center"> # </TableCell>
                                                <TableCell align="center"> Ticket Num </TableCell>
                                                <TableCell align="center"> SUBJECT </TableCell>
                                                <TableCell align="center"> STATUS </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {   tickets !== null &&
                                                tickets.map((ticket, i) => (
                                                    <TableRow key={ticket.id} onClick={handleDetailsOpen} style={{cursor: 'pointer'}}>
                                                        <TableCell component="th" scope="row">
                                                            {i + 1}
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            { ticket.ticket_id }
                                                        </TableCell>
                                                        <TableCell align="center"> {ticket.subject} </TableCell>
                                                        <TableCell align="center">
                                                            <Typography variant="body2" color="textPrimary"> {ticket.status} </Typography>
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
                                                                    id='title'
                                                                    name='title'
                                                                    autoComplete='title'
                                                                    autoFocus
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
                                                                    id='cc'
                                                                    name='cc'
                                                                    autoComplete='cc'
                                                                    autoFocus
                                                                    placeholder="cc"
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
                                                                        width: '100%'
                                                                    }}
                                                                    variant='outlined'
                                                                    margin='normal'
                                                                    required
                                                                    width='100%'
                                                                    id='description'
                                                                    name='description'
                                                                    autoComplete='description'
                                                                    autoFocus
                                                                    aria-label='minimum height'
                                                                    // rowsMin={3}
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


                            <div>
                                <Modal
                                    aria-labelledby='transition-modal-title'
                                    aria-describedby='transition-modal-description'
                                    className={classes.modal}
                                    open={ticketDetails}
                                    onClose={handleDetailsClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={ticketDetails}>
                                        <div className={classes.modalPaper}>
                                            <div className='mt-3'>
                                                <Card className={classes.ticketCard}>
                                                    <CardHeader
                                                        action={
                                                            <IconButton
                                                                onClick={handleDetailsClose}
                                                                aria-label='settings'
                                                                style={{ color: "#2d2d2d" }}
                                                            >
                                                                <CancelOutlinedIcon />
                                                            </IconButton>
                                                        }
                                                    />
                                                    <CardContent>
                                                        <div style={{color: '#2d2d2d'}}>
                                                            <Typography variant="body1" align="left">
                                                                <strong>Subject : </strong> Lorem ipsum dolor.
                                                            </Typography>
                                                            <Typography variant="subtitle2" align="left">
                                                                <strong>Details : </strong> <small> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </small>
                                                            </Typography>
                                                        </div>
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