import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import './Payment.css'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#fff'
    },

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
}));

const Payment = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div>
                                <form className='paymentForm' onSubmit={handleSubmit(onSubmit)}>
                                    <div className='d-flex'>  
                                        <div className='' style={{ width: '40%', margin: '0 2rem'}}>
                                            <h6> Billing Info </h6>
                                            <div>
                                                <label htmlFor="name"> FULL NAME </label>
                                                {errors.name && (
                                                    <li style={{ color: "red" }}>Username is required!</li>
                                                )}
                                                <input
                                                    name='name'
                                                    className='mr-2'
                                                    ref={register({ required: true })}
                                                    placeholder='Marie Winter'
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="address"> ADDRESS </label>
                                                <input
                                                    name='address'
                                                    ref={register({ required: true })}
                                                    placeholder='4098 Water Street'
                                                />
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <label htmlFor="city"> CITY </label>
                                                    <input
                                                        name='city'
                                                        ref={register({ required: true })}
                                                        placeholder='San Francisco'
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="zipCode"> ZIP CODE </label>
                                                    <input
                                                        name='zipCode'
                                                        ref={register({ required: true })}
                                                        placeholder='45546'
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="country"> COUNTRY </label>
                                                <select
                                                    name='homeOwner'
                                                    className='mr-2'
                                                    ref={register({ required: true })}
                                                >

                                                    <option value='United States'>United States</option>
                                                    <option value='Canada'>Canada</option>
                                                    <option value='Australia'>Australia</option>
                                                    <option value='United Kingdom'>United Kingdom</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='' style={{ width: '40%', margin: '0 2rem' }}>
                                            <h6> Credit Card Info </h6>
                                            <div>
                                                <label htmlFor="cardNumber"> CARD NUMBER </label>
                                                <input
                                                    name='cardNumber'
                                                    className='mr-2'
                                                    ref={register({ required: true })}
                                                    placeholder='42 42 42 42 42 42'
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="cardHolder"> CARD HOLDER NAME </label>
                                                <input
                                                    name='cardHolder'
                                                    ref={register({ required: true })}
                                                    placeholder='Marie Winter'
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="expireDate"> EXPIRE DATE </label>
                                                <input
                                                    name='expireDate'
                                                    ref={register({ required: true })}
                                                    placeholder='05/22'
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="cardHolder"> CVV </label>
                                                <input
                                                    name='cardHolder'
                                                    ref={register({ required: true })}
                                                    placeholder='4098 Water Street'
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <input id="payment-btn" value='Continue' type='submit' />
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default Payment;