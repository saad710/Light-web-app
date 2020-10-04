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
        backgroundColor: '#213F7E',
        color: '#fff',
        borderRadius: 0,
        padding: '0.5rem 5rem',
    }
}));


const Customers = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> # </TableCell>
                                        <TableCell align="right"> NAME </TableCell>
                                        <TableCell align="right"> EMAIL </TableCell>
                                        <TableCell align="right"> DESCRIPTION </TableCell>
                                        <TableCell align="right"> DATE OF PURCHASES </TableCell>
                                        <TableCell align="right"> DATE OF RENEWAL </TableCell>
                                        <TableCell align="right"> ACTION </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        customerData.map(customer => (
                                            <TableRow key={customer.id}>
                                                <TableCell component="th" scope="row">
                                                    {customer.id}
                                                </TableCell>
                                                <TableCell align="right">{customer.name}</TableCell>
                                                <TableCell align="right">{customer.email}</TableCell>
                                                <TableCell align="right">{customer.description}</TableCell>
                                                <TableCell align="right">{customer.dateOfPurchase}</TableCell>
                                                <TableCell align="right">{customer.dateOfRenewwal}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                    
                </Container>
            </main>
        </div>
    );
};

export default Customers;