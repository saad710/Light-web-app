import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../MainDashboard/AppBarDrawer';
import MailCount from './MailCount/MailCount';
import Chart from './Chart/Chart';
import VerifiedCustomer from './CustomersType/VerifiedCustomer';
import UnverifiedCustomer from './CustomersType/UnverifiedCustomer';
import PendingCustomers from './CustomersType/PendingCustomers';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#fff'
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
}));

export default function NavDashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <MailCount />
                            <Chart />
                            {/* <VerifiedCustomer />
                            <UnverifiedCustomer />
                            <PendingCustomers /> */}
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
