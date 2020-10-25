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
import { Button, ButtonGroup, Card, CardContent, CardMedia, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useStyles } from './ReportPageStyle';
import bar1 from '../../../images/bar1.svg'
import bar2 from '../../../images/bar2.svg'
import bar3 from '../../../images/bar3.svg'
import MarkunreadIcon from '@material-ui/icons/Markunread';

const ReportPage = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    console.log(checked);

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
                        <Grid item xs={12} md={4}>
                            <Paper>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <div style={{ marginRight: '13rem' }}>
                                            <Typography align="center">
                                                Responded
                                            </Typography>
                                            <Typography align="center">
                                                <strong > 246 </strong>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardMedia>
                                        <img className={classes.media} src={bar1} alt="" />
                                    </CardMedia>
                                </Card>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <div style={{ marginRight: '13rem' }}>
                                            <Typography align="center">
                                                Total Open
                                            </Typography>
                                            <Typography align="center">
                                                <strong > 246 </strong>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardMedia>
                                        <img className={classes.media} src={bar1} alt="" />
                                    </CardMedia>
                                </Card>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <div style={{ marginRight: '13rem' }}>
                                            <Typography align="center">
                                                Total Read
                                            </Typography>
                                            <Typography align="center">
                                                <strong > 246 </strong>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardMedia>
                                        <img className={classes.media} src={bar1} alt="" />
                                    </CardMedia>
                                </Card>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <div style={{ marginRight: '13rem' }}>
                                            <Typography align="center">
                                                Total Send
                                            </Typography>
                                            <Typography align="center">
                                                <strong > 246 </strong>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardMedia>
                                        <img className={classes.media} src={bar1} alt="" />
                                    </CardMedia>
                                </Card>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <div style={{ marginRight: '13rem' }}>
                                            <Typography align="center">
                                                Deadline
                                            </Typography>
                                            <Typography align="center">
                                                <strong > Fri Oct 30 </strong>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardMedia>
                                        <img className={classes.media} src={bar1} alt="" />
                                    </CardMedia>
                                </Card>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <div style={{ marginRight: '13rem' }}>
                                            <Typography align="center">
                                                Remainder
                                            </Typography>
                                            <Typography align="center">
                                                <strong > Fri Oct 30 </strong>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardMedia>
                                        <img className={classes.media} src={bar1} alt="" />
                                    </CardMedia>
                                </Card>
                            </Paper>
                        </Grid>

                        

                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> # </TableCell>
                                        <TableCell align="center"> Email </TableCell>
                                        <TableCell align="center"> Group </TableCell>
                                        {/* <TableCell align="center"> Tag </TableCell> */}
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
                                                <TableCell align="center"> Group name </TableCell>
                                                {/* <TableCell align="center"> quick reply, no-reply </TableCell> */}
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
                                                                    onChange={handleChange}
                                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                />
                                                            }
                                                            label="Close this mail"
                                                        />
                                                        {
                                                            checked && 
                                                            <input type="text" placeholder="comment" />
                                                        }
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