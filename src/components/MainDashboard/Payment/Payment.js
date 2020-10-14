import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import paymentImg from '../../../images/cardIcon.svg'
import './Payment.css'
import { useHistory } from 'react-router-dom';


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
        window.location = './invoice'
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
                                <div style={{ textAlign: 'center', paddingBottom: '3rem'}}>
                                    <h1> Payment </h1>
                                    <p> Choose payment method bellow </p>
                                    <div >
                                        <img style={{ border: '2px solid #4195D1', padding: '1.5rem 5rem' }} src={paymentImg} alt=""/>
                                    </div>
                                </div>
                                <form className='paymentForm' onSubmit={handleSubmit(onSubmit)}>
                                    <div className='d-flex'>  
                                        <div className='' style={{ width: '40%', margin: '0 2rem'}}>
                                            <h6 className="my-4"> Billing Info </h6>
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
                                            <br/>
                                            <div>
                                                <label htmlFor="address"> ADDRESS </label>
                                                {errors.address && (
                                                    <li style={{ color: "red" }}>Address is required!</li>
                                                )}
                                                <input
                                                    name='address'
                                                    ref={register({ required: true })}
                                                    placeholder='4098 Water Street'
                                                />
                                            </div>
                                            <br/>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <label htmlFor="city"> CITY </label>
                                                    {errors.city && (
                                                        <li style={{ color: "red" }}>City is required!</li>
                                                    )}
                                                    <input
                                                        style={{width: '95%'}}
                                                        name='city'
                                                        ref={register({ required: true })}
                                                        placeholder='San Francisco'
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="zipCode"> ZIP CODE </label>
                                                    {errors.zipCode && (
                                                        <li style={{ color: "red" }}>Zip Code is required!</li>
                                                    )}
                                                    <input
                                                        name='zipCode'
                                                        ref={register({ required: true })}
                                                        placeholder='45546'
                                                    />
                                                </div>
                                            </div>
                                            <br/>
                                            <div>
                                                <label htmlFor="country"> COUNTRY </label>
                                                {errors.country && (
                                                    <li style={{ color: "red" }}>Country is required!</li>
                                                )}
                                                <select
                                                    name='country'
                                                    className='mr-2'
                                                    ref={register({ required: true })}
                                                >

                                                    <option value='United States'>United States</option>
                                                    <option value='Canada'>Canada</option>
                                                    <option value='Australia'>Australia</option>
                                                    <option value='United Kingdom'>United Kingdom</option>
                                                </select>
                                            </div>
                                            <br/>
                                        </div>

                                        <div className='' style={{ width: '40%', margin: '0 2rem' }}>
                                            <h6 className="my-4"> Credit Card Info </h6>
                                            <div>
                                                <label htmlFor="cardNumber"> CARD NUMBER </label>
                                                {errors.cardNumber && (
                                                    <li style={{ color: "red" }}>Card Number is required!</li>
                                                )}
                                                <input
                                                    name='cardNumber'
                                                    className='mr-2'
                                                    ref={register({ required: true })}
                                                    placeholder='42 42 42 42 42 42'
                                                />
                                            </div>
                                            <br/>
                                            <div>
                                                <label htmlFor="cardHolder"> CARD HOLDER NAME </label>
                                                {errors.cardHolder && (
                                                    <li style={{ color: "red" }}>Card Holder Name is required!</li>
                                                )}
                                                <input
                                                    name='cardHolder'
                                                    ref={register({ required: true })}
                                                    placeholder='Marie Winter'
                                                />
                                            </div>
                                            <br/>

                                            <div>
                                                <label htmlFor="expireDate"> EXPIRE DATE </label>
                                                {errors.expireDate && (
                                                    <li style={{ color: "red" }}>Expire date is required!</li>
                                                )}
                                                <input
                                                    name='expireDate'
                                                    ref={register({ required: true })}
                                                    placeholder='05/22'
                                                />
                                            </div>
                                            <br/>

                                            <div>
                                                <label htmlFor="cvv"> CVV </label>
                                                {errors.expireDate && (
                                                    <li style={{ color: "red" }}>CVV date is required!</li>
                                                )}
                                                <input
                                                    name='cvv'
                                                    ref={register({ required: true })}
                                                    placeholder='4098 Water Street'
                                                />
                                            </div>
                                            <br/>
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