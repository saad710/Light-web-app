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
import { Button } from '@material-ui/core';
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
                                <Button onClick={handleUpdateEmailModalOpen} variant="contained" className={classes.emailBtn}>
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
                                        <Button className={classes.signatureBtn} variant="contained"> Add </Button>
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