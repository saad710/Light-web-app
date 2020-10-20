import React from 'react';
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
import { Button, ButtonGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useStyles } from './ReportPageStyle';

const ReportPage = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> # </TableCell>
                                        <TableCell align="center"> Email </TableCell>
                                        <TableCell align="center"> Remainder </TableCell>
                                        <TableCell align="center"> Deadline </TableCell>
                                        <TableCell align="center"> Group </TableCell>
                                        <TableCell align="center"> Tag </TableCell>
                                        <TableCell align="center"> Status </TableCell>
                                        <TableCell align="center"> Action </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        customerData.map((customer, i) => (
                                            <TableRow key={customer.id}>
                                                <TableCell component="th" scope="row">
                                                    {i + 1}
                                                </TableCell>
                                                <TableCell align="center">{customer.email}</TableCell>
                                                <TableCell align="center"> 10/11/2020 </TableCell>
                                                <TableCell align="center"> 10/12/2020 </TableCell>
                                                <TableCell align="center"> Group name </TableCell>
                                                <TableCell align="center"> quick reply, no-reply </TableCell>
                                                <TableCell align="center">
                                                    <div>
                                                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                                            <Button size="small" style={{ fontSize: '10px' }}>
                                                                Responded
                                                            </Button>
                                                        </ButtonGroup>
                                                    </div>
                                                </TableCell>

                                                <TableCell align="center"> 
                                                    <div
                                                        style={{
                                                            display:'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    color="primary"
                                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                />
                                                            }
                                                            label="Take it offline"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    color="primary"
                                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                />
                                                            }
                                                            label="Close this mail"
                                                        />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                            <div className={classes.paginationBox} style={{ marginBottom: '20px' }}>
                                <Pagination count={10} className={classes.pagination} />
                            </div>
                        </TableContainer>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default ReportPage;