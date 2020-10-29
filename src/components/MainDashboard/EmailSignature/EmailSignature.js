import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import avatar from '../../../images/avatar.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import { Button, TextareaAutosize, TextField } from '@material-ui/core';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import '../Coompose/Compose.css'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './EmailSignatureStyle';

const EmailSignature = () => {
    const classes = useStyles();
    const [addEmailModal, setAddEmailModal] = useState(false);
    const [updateEmailModal, setUpdateEmailModal] = useState(false);
    const [formValue, setFormValue] = useState({});

    const handleAddEmailModalOpen = () => {
        setAddEmailModal(true);
    };

    const handleAddEmailModalClose = () => {
        setAddEmailModal(false);
    };

    const handleUpdateEmailModalOpen = () => {
        setUpdateEmailModal(true);
    };

    const handleUpdateEmailModalClose = () => {
        setUpdateEmailModal (false);
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
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <div style={{ margin: '0 auto' }}>
                                <Button onClick={handleAddEmailModalOpen} variant="contained" className={classes.emailBtn}>
                                    Add New
                                </Button>
                                <Button  variant="contained" className={classes.emailBtn}>
                                    Update
                                </Button>
                            </div>
                            <div className={classes.signatureBox}>
                                <div className="d-flex" style={{ marginLeft: '0.5rem' }}>
                                    <div>
                                        <img className="pt-2" width="50%" src={avatar} alt="" />
                                    </div>
                                    <div style={{ color: '#2d2d2d', marginLeft: '-1.5rem' }}>
                                        <h6> Marie Winter </h6>
                                        <p> <strong> Designation </strong> </p>
                                        <p>
                                            <span> Phone : +45 343 3434 21 </span>
                                            <span style={{ padding: '0 1rem' }}> Address : 1547 East Farm  Road </span>
                                        </p>
                                        <hr style={{ backgroundColor: '#4195D1', padding: '0.5px 0' }} />
                                        <div style={{ margin: '0 4.5rem' }}>
                                            <FacebookIcon style={{ margin: '0 1rem' }} />
                                            <TwitterIcon style={{ margin: '0 1rem' }} />
                                            <InstagramIcon style={{ margin: '0 1rem' }} />
                                            <LanguageIcon style={{ margin: '0 1rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.signatureBox}>
                                <div className="d-flex" style={{ marginLeft: '0.5rem' }}>
                                    <div>
                                        <img className="pt-2" width="50%" src={avatar} alt="" />
                                    </div>
                                    <div style={{ color: '#2d2d2d', marginLeft: '-1.5rem' }}>
                                        <h6> Marie Winter </h6>
                                        <p> <strong> Designation </strong> </p>
                                        <p>
                                            <span> Phone : +45 343 3434 21 </span>
                                            <span style={{ padding: '0 1rem' }}> Address : 1547 East Farm  Road </span>
                                        </p>
                                        <hr style={{ backgroundColor: '#4195D1', padding: '0.5px 0' }} />
                                        <div style={{ margin: '0 4.5rem' }}>
                                            <FacebookIcon style={{ margin: '0 1rem' }} />
                                            <TwitterIcon style={{ margin: '0 1rem' }} />
                                            <InstagramIcon style={{ margin: '0 1rem' }} />
                                            <LanguageIcon style={{ margin: '0 1rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            {/* Add email Signature start */}
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={addEmailModal}
                                onClose={handleAddEmailModalClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={addEmailModal}>
                                    <div className={classes.emailModal}>
                                        <h6 className="text-center" style={{color: '#fff', padding: '0.5rem 0'}}> Add new Signature </h6>
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
                                                    placeholder='Name'
                                                    onBlur={handleAddEmailModalOpen}
                                                />
                                            </div>

                                            <div style={{ margin: "1rem 0" }}>
                                                <TextField
                                                    style={{ backgroundColor: "#fff" }}
                                                    variant='outlined'
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='designation'
                                                    name='designation'
                                                    autoComplete='designation'
                                                    autoFocus
                                                    placeholder='Designation'
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
                                                    id='phone'
                                                    name='phone'
                                                    autoComplete='phone'
                                                    autoFocus
                                                    placeholder='Phone'
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
                                            <div style={{ margin: "1rem 0" }}>
                                                <TextField
                                                    style={{ backgroundColor: "#fff" }}
                                                    variant='outlined'
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='facebook'
                                                    name='facebook'
                                                    autoComplete='facebook'
                                                    autoFocus
                                                    placeholder='Facebook'
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
                                                    id='twitter'
                                                    name='twitter'
                                                    autoComplete='twitter'
                                                    autoFocus
                                                    placeholder='Twitter'
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
                                                    id='instagram'
                                                    name='instagram'
                                                    autoComplete='instagram'
                                                    autoFocus
                                                    placeholder='Instagram'
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
                                                    id='website'
                                                    name='website'
                                                    autoComplete='website'
                                                    autoFocus
                                                    placeholder='Website'
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
                                                Add
                                            </Button>
                                        </form>
                                    </div>
                                </Fade>
                            </Modal>
                            {/* Add email Signature end */}


                            {/* Update email Signature start */}
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={updateEmailModal}
                                onClose={handleUpdateEmailModalClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={updateEmailModal}>
                                    <div className={classes.emailModal}>
                                        <h6 className="text-center" style={{ color: '#fff', padding: '0.5rem 0' }}> Update Signature </h6>
                                        <SunEditor
                                            width="100  %"
                                            placeholder=" Email Signature "
                                            setOptions={{
                                                height: 150,
                                                buttonList: [
                                                    ['font', 'fontSize', 'formatBlock'],
                                                    ['bold', 'underline', 'italic',],
                                                    ['align', 'horizontalRule', 'list', 'lineHeight'],
                                                    ['link', 'image', 'video',],
                                                    ['fullScreen', 'codeView'],
                                                ]
                                            }}
                                        />
                                        <Button className={classes.signatureBtn} variant="contained"> Update </Button>
                                    </div>
                                </Fade>
                            </Modal>
                            {/* Update email Signature end */}
                        </div>

                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default EmailSignature;