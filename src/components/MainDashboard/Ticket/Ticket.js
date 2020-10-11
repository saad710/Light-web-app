import React from 'react';
import { Backdrop, Button, Card, CardContent, CardHeader, Fade, IconButton, makeStyles, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
const useStyles = makeStyles((theme) => ({
    form: {
        // width: '30%',
        marginTop: theme.spacing(1),
        textAlign: 'start',
        // margin: '0 auto'
        marginTop: '-2rem',
        marginBottom: '0',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    ticketBtn: {
        background: 'none',
        border: '1px solid gray',
        color: '#2d2d2d',
        margin: '0.5rem 0'
    },
    ticketCard: {
        width: '30%',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#3A86BC',
        boxShadow: 'none',
        margin: '5rem auto'
    },
}));

const Ticket = () => {
    // const classes = useStyles();
    // const [ticketModal, setTicketModal] = React.useState(false);

    // const handleOpen = () => {
    //     setTicketModal(true);
    // };
    // const handleClose = () => {
    //     setTicketModal(false);
    // };
    return (
        <div>
            {/* <h1 onClick={handleOpen}> Click </h1>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
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
                        <div className="mt-3">
                            <Card className={classes.ticketCard}>
                                <CardHeader
                                    action={
                                        <IconButton onClick={handleClose} aria-label="settings" style={{ color: '#2d2d2d' }}>
                                            <CancelOutlinedIcon/>
                                        </IconButton>

                                    }
                                />
                                <CardContent>
                                    <form className={classes.form} noValidate>
                                        <div style={{ margin: '1rem 0' }}>
                                            <TextField
                                                style={{ backgroundColor: '#fff' }}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="name"
                                                name="name"
                                                autoComplete="name"
                                                autoFocus
                                                placeholder="Marie Winter"
                                            />
                                        </div>
                                        <div>
                                            <TextField
                                                style={{ backgroundColor: '#fff' }}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                                placeholder="user@email.com"
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <TextareaAutosize
                                                style={{ backgroundColor: '#fff', borderRadius: '0.2rem', height: '100px' }}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                width="100%"
                                                id="address"
                                                name="address"
                                                autoComplete="address"
                                                autoFocus
                                                aria-label="minimum height"
                                                rowsMin={3}
                                                placeholder="Physical Address"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes.ticketBtn}
                                        >
                                            CREATE USER
                                    </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Fade>
            </Modal> */}
        </div>

    );
};

export default Ticket;