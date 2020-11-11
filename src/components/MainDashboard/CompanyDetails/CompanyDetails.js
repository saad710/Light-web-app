import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Button, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ToolBar from '../ToolBar/ToolBar';
import { useStyles } from './CompanyDetailsStyle';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';

const CompanyDetails = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [formValue, setFormValue] = useState({});

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }; 

    const handleBlur = (e) => {
        const value = { ...formValue };
        value[e.target.name] = e.target.value;
        setFormValue(value);
    };

    const handleSubmit = (e) => {
        const finalValue = { ...formValue };
        console.log(finalValue);
        e.preventDefault();
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
                        <Grid item xs>
                            <div style={{ marginLeft: '20rem'}}>
                                <div style={{marginLeft: '6rem'}}>
                                    <Button onClick={handleOpen} variant="contained" size="small" 
                                        style={{ 
                                            fontSize: '12px',
                                            margin: '0 3rem',
                                            backgroundColor: '#4195D1',
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        }}>
                                        Add Info
                                    </Button>
                                </div>
                                <div style={{ marginTop: '2rem' }}>
                                    <div className="d-flex align-items-center"
                                        style={{marginLeft: '6rem', marginBottom:'2rem'}}
                                    >
                                        <div>
                                            <Typography variant="h5"> Lebsack-Towne </Typography>
                                            <Typography variant="caption"> Utilize Strategic Niches </Typography>
                                        </div>
                                        <EditIcon style={{ color: '#4195D1'}} className="ml-3" />

                                    </div>
                                    <div className="mt-3 d-flex">
                                        <div className="pr-5">
                                            <div className="">
                                                <Typography varient="body1"> Location </Typography>
                                                <div
                                                    style={{
                                                        border: '2px solid #4195D1',
                                                        width: '50%',
                                                        margin: '0.4rem 0'
                                                    }}
                                                >

                                                </div>
                                                <Typography variant="body2"> 669 Park Street Pittsburg, CA <br /> California </Typography>
                                            </div>

                                            <div className="mt-3">
                                                <Typography varient="body1"> Phone </Typography>
                                                <div
                                                    style={{
                                                        border: '2px solid #4195D1',
                                                        width: '50%',
                                                        margin: '0.4rem 0'
                                                    }}
                                                >

                                                </div>
                                                <Typography variant="body2"> +22 344 5455 6534 </Typography>
                                                <Typography variant="body2"> +22 344 5455 6534 </Typography>
                                            </div>
                                        </div>

                                        <div className="pl-5">
                                            <div >
                                                <Typography varient="body1"> Email </Typography>
                                                <div
                                                    style={{
                                                        border: '2px solid #4195D1',
                                                        width: '50%',
                                                        margin: '0.4rem 0'
                                                    }}
                                                >

                                                </div>
                                                <Typography variant="body2"> info@towne.com </Typography>
                                                <Typography variant="body2"> carrer@towne.com </Typography>
                                            </div>

                                            <div className="mt-3">
                                                <Typography varient="body1"> Website </Typography>
                                                <div
                                                    style={{
                                                        border: '2px solid #4195D1',
                                                        width: '50%',
                                                        margin: '0.4rem 0'
                                                    }}
                                                >

                                                </div>
                                                <Typography variant="body2"> niches@info.com </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>


                        {/* <TableContainer component={Paper}>
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
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                            <div className={classes.paginationBox} style={{marginBottom: '20px'}}>
                                <Pagination count={10} className={classes.pagination} />
                            </div>
                        </TableContainer> */}

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
                                                    placeholder='Company'
                                                    onBlur={handleBlur}
                                                />
                                            </div>

                                            <div style={{ margin: "1rem 0" }}>
                                                <TextField
                                                    style={{ backgroundColor: "#fff" }}
                                                    variant='outlined'
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='tagline'
                                                    name='tagline'
                                                    autoComplete='tagline'
                                                    autoFocus
                                                    placeholder='Tagline'
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            
                                            <div className='mt-3'>
                                                <TextareaAutosize
                                                    style={{
                                                        backgroundColor: "#fff",
                                                        borderRadius: "0.2rem",
                                                        height: "50px",
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
                                                    placeholder='Address..'
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
                                                    id='website'
                                                    name='website'
                                                    autoComplete='website'
                                                    autoFocus
                                                    placeholder='Website'
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
                                                    placeholder='Email'
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
                                                    id='phone'
                                                    name='phone'
                                                    autoComplete='phone'
                                                    autoFocus
                                                    placeholder='Phone'
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
                                                ADD
                                            </Button>
                                        </form>
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