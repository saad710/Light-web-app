import React from 'react';
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
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import avatar from '../../../images/avatar.png'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#4195D1'
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
    },
    btnStyle: {
        backgroundColor: '#fff',
        color: '#2d2d2d',
        borderRadius: 0,
        padding: '0.5rem 5rem',
    },
    fixedHeight: {
        height: 240,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPaper: {
        // backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: '#213F7E'
    },
    cardRoot: {
        minWidth: 275,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#213F7E',
        boxShadow: 'none'

    }
}));


const Customers = () => {
    const classes = useStyles();
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
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Button style={{ margin: '1rem auto' }} variant="contained" className={classes.btnStyle} >
                            CREATE NEW
                        </Button>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> # </TableCell>
                                        <TableCell align="center"> NAME </TableCell>
                                        <TableCell align="center"> EMAIL </TableCell>
                                        <TableCell align="center"> DESCRIPTION </TableCell>
                                        <TableCell align="center"> DATE OF PURCHASES </TableCell>
                                        <TableCell align="center"> DATE OF RENEWAL </TableCell>
                                        <TableCell align="center"> ACTION </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        customerData.map((customer, i) => (
                                            <TableRow key={customer.id}>
                                                <TableCell component="th" scope="row">
                                                    {i+1}
                                                </TableCell>
                                                <TableCell align="center">{customer.name}</TableCell>
                                                <TableCell align="center">{customer.email}</TableCell>
                                                <TableCell align="center">{customer.description}</TableCell>
                                                <TableCell align="center">{customer.dateOfPurchase}</TableCell>
                                                <TableCell align="center">{customer.dateOfRenewwal}</TableCell>
                                                <TableCell align="center"> 
                                                    <div>
                                                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                                            <Button onClick={handleOpen}>UPDATE</Button>
                                                            <Button onClick={handleOpen} style={{ backgroundColor: '#4195D1'}}>DELETE</Button>
                                                        </ButtonGroup>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
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
                    </Grid>
                    
                </Container>
            </main>
        </div>
    );
};

export default Customers;