import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import {Button, TextField, Typography} from '@material-ui/core';
import { useStyles } from './TeamStyle';


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
                                    <select class="form-control" id="role" name="role" onChange={handleTeamInput}>
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