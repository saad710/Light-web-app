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
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
                            ADD CONTACT
                        </Button>
                        {/* <Button onClick={handleOpen} style={{ margin: '1rem auto' }} variant="contained" className={classes.btnStyle} >
                            ADD GROUP
                        </Button> */}
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
                                        <TableCell align="center"> TAG </TableCell>
                                        <TableCell align="center"> PHYSICAL ADDRESS </TableCell>
                                        <TableCell align="center"> STATUS </TableCell>
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
                                                <TableCell align="center"> Tag-1 </TableCell>
                                                <TableCell align="center"> 4670  Charles Street, FORT WAYNE </TableCell>
                                                <TableCell align="center">
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        size="small"
                                                        style={{ fontSize: '12px' }}>
                                                            verified
                                                    </Button>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <div>
                                                        <ButtonGroup
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            aria-label="contained primary button group"
                                                        >
                                                            <Button
                                                                style={{fontSize: '10px'}} color="secondary">REMOVE</Button>
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
                                <div className={classes.customerPaper}>
                                    <div className="mt-3">
                                        <Card className={classes.cardRoot}>
                                            <CardContent style={{ background: 'none !important' }}>

                                                <div className={classes.paper}>
                                                    <Typography component="body1" variant="body1">
                                                        CREATE GROUP
                                                    </Typography>
                                                    <form className={classes.form} noValidate>


                                                        <div>
                                                            <label htmlFor=""> Email </label>
                                                            <TextField
                                                                style={{ backgroundColor: '#fff' }}
                                                                variant="outlined"
                                                                margin="normal"
                                                                required
                                                                fullWidth
                                                                id="email"
                                                                name="email"email
                                                                autoComplete="email"
                                                                autoFocus
                                                                placeholder="email"
                                                            />
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="exampleFormControlSelect1">Group</label>
                                                            <select class="form-control" id="role" name="role">
                                                                <option> Group-1 </option>
                                                                <option> Group-2 </option>
                                                                <option> Group-3 </option>
                                                                <option> Group-4 </option>
                                                            </select>
                                                        </div>

                                                        <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            color="primary"
                                                            className={classes.submit}
                                                        >
                                                            ADD GROUP
                                                        </Button>
                                                    </form>
                                                </div>
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
                                                    <Typography component="body1" variant="body1">
                                                        ADD CONTACT
                                                    </Typography>
                                                    <form className={classes.form} noValidate>
                                                        <div class="btn-group" style={{width: '100%', height: '2.5rem'}}>
                                                            <input
                                                                id="search"
                                                                style={{
                                                                    width: '100%',
                                                                    padding: '1rem 1rem',
                                                                    borderRadius: '0.4rem'
                                                                }}
                                                                // onChange={handleChange}
                                                                placeholder="Choose the Category..."
                                                                className="dropdown-toggle"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                // aria-expanded="false"
                                                                autoComplete="off"
                                                                // value={currentItem}
                                                            />
                                                            <div class="dropdown-menu">
                                                                {/* {
                                                                    products.map(item => (
                                                                        <a class="dropdown-item" onClick={() => handleSubmit(item)}>  {item.name} </a>
                                                                        <li class="dropdown-item" onClick={() => handleSubmit(item)}>  {item.name} </li>
                                                                    ))
                                                                } */}
                                                                <div className="d-flex py-1">
                                                                    <li class="dropdown-item">  mariewinter@gmail.com </li>
                                                                    <Button variant="outlined" color="primary" size="small"> invite </Button>
                                                                </div>
                                                                <div className="d-flex py-1">
                                                                    <li class="dropdown-item">  mariewinter@gmail.com </li>
                                                                    <Button variant="outlined" color="primary" size="small"> invite </Button>
                                                                </div>
                                                                <div className="d-flex py-1">
                                                                    <li class="dropdown-item">  mariewinter@gmail.com </li>
                                                                    <Button variant="outlined" color="primary" size="small"> invite </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            color="primary"
                                                            className={classes.submit}
                                                        >
                                                            ADD CONTACT
                                                        </Button>
                                                    </form>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </Fade>
                        </Modal>

                        {/* group modal  */}

                        {/* create user modal  */}

                        {/* <Modal
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
                            <Fade in={handleOpen}>
                                <div className={classes.customerPaper}>
                                    <div className="mt-3">
                                        <Card className={classes.cardRoot}>
                                            <CardContent style={{ background: 'none !important' }}>

                                                <div className={classes.paper}>
                                                    <Typography component="body1" variant="body1">
                                                        CREATE GROUP
                                                    </Typography>
                                                    <form className={classes.form} noValidate>
                                                        

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

                                                        <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            color="primary"
                                                            className={classes.submit}
                                                        >
                                                            CREATE GROUP
                                                        </Button>
                                                    </form>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </Fade>
                        </Modal> */}


                    </Grid>
                    
                </Container>
            </main>
        </div>
    );
};

export default Customers;