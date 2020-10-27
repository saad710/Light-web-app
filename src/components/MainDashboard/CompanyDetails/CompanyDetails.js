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
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import avatar from '../../../images/avatar.png'
import { Pagination } from '@material-ui/lab';
import ToolBar from '../ToolBar/ToolBar';
import { useStyles } from './CompanyDetailsStyle';

const CompanyDetails = () => {
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
                <ToolBar />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> # </TableCell>
                                        <TableCell align="center"> Organisation Name </TableCell>
                                        <TableCell align="center"> Address </TableCell>
                                        <TableCell align="center"> Website </TableCell>
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
                                                <TableCell align="center"> 38, Park Road, NY </TableCell>
                                                <TableCell align="center"> websitedemo.com </TableCell>
                                                {/* <TableCell align="center">
                                                    <div>
                                                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                                            <Button size="small" style={{fontSize: '10px'}} onClick={handleOpen}>UPDATE</Button>
                                                        </ButtonGroup>
                                                    </div>
                                                </TableCell> */}
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                            <div className={classes.paginationBox} style={{marginBottom: '20px'}}>
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
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default CompanyDetails;