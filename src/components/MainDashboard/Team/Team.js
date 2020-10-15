import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import {Button,FormControl,InputBase,InputLabel,NativeSelect,TextField, Typography, withStyles } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 30rem',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

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
        width: '100%',
        color: '#2d2d2d'
    },
    fixedHeight: {
        height: 240,
    },
    btnStyle: {
        backgroundColor: '#213F7E',
        color: '#fff',
        borderRadius: 0,
        padding: '0.5rem 5rem',
    }
}));
const Team = () => {
    const classes = useStyles();
    const [teamRole, setTeamRole] = useState({});
    console.log(teamRole);
    
    const handleTeamInput = (e) => {
        const newRole = {...teamRole}
        newRole[e.target.name] = e.target.value 
        setTeamRole(newRole)
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <Typography className="pt-2" style={{ margin: ' 0 auto ' }} component="body6" variant="body6">
                                Add User
                            </Typography>
                            <form className={classes.form} noValidate>
                                
                                <div>
                                    <label htmlFor=""> Email </label>
                                    <TextField
                                        style={{ borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        placeholder="user@email.com"
                                        onChange={handleTeamInput}
                                    />
                                </div>
                                {/* <div>
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="demo-customized-select-native">Select Role</InputLabel>
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            name="select"
                                            value={teamRole.select}
                                            onChange={handleTeamInput}
                                            input={<BootstrapInput />}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="client">Client</option>
                                            <option value="admin">Admin</option>
                                        </NativeSelect>
                                    </FormControl>

                                </div> */}

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select Role</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option> Client </option>
                                        <option> Admin </option>
                                    </select>
                                </div>
                                
                                <Button
                                    style={{ padding: '0.6rem 0', margin: '1rem 0' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    ADD USER
                                </Button>
                            </form>
                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Team;