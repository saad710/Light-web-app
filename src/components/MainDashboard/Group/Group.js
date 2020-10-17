import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Button , TextField, Typography } from '@material-ui/core';
import { useStyles } from './GroupStyle';

const Group = () => {
    const classes = useStyles();
    const [addGroup, setAddGroup] = useState({});
    console.log(addGroup);

    const handleTeamInput = (e) => {
        const newGroup = { ...addGroup }
        newGroup[e.target.name] = e.target.value
        setAddGroup(newGroup)
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
                                Add Groups
                            </Typography>
                            <form className={classes.form} noValidate>

                                <div>
                                    <label htmlFor=""> Tags </label>
                                    <TextField
                                        style={{ borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="group"
                                        name="group"
                                        autoComplete="group"
                                        autoFocus
                                        placeholder="group-1, group-2"
                                        onChange={handleTeamInput}
                                    />
                                </div>


                                <Button
                                    style={{ padding: '0.5rem 0', margin: '1rem 0', fontSize: '12px' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    ADD GROUP
                                </Button>
                            </form>
                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Group;