import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarDrawer from '../AppBarDrawer';
import { Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import { useStyles } from './TagStyle';
import customerData from '../../../data/customerData';
import { Pagination } from '@material-ui/lab';
import { key } from '../../../apiKey';
const axios = require('axios');


const Tag = () => {
    const classes = useStyles();
    const [addTag, setAddTag] = useState({});
    const [allTag, setAllTag] = useState(null);

    console.log("all",allTag);

    const handleTagInput = (e) => {
        const newTag = { ...addTag }
        newTag[e.target.name] = e.target.value
        setAddTag(newTag)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const tag_name = {...addTag}
        console.log(tag_name);
        axios.post(`${key}create-tag`, tag_name)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        axios(`${key}tag-all`)
            .then(res => {
                const tags = res.data
                setAllTag(tags)
            })
            .then(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        <div className={classes.paper}>
                            <Typography className="pt-2" style={{ margin: ' 0 auto ' }} component="body2" variant="body2">
                                Add Tags
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
                                        id="tag"
                                        name="tag_name"
                                        autoComplete="tag"
                                        autoFocus
                                        placeholder="quick-reply, schedule"
                                        onChange={handleTagInput}
                                    />
                                </div>


                                <Button
                                    style={{ padding: '0.4rem 0', margin: '1rem 0', fontSize: '12px' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleSubmit}
                                >
                                    ADD TAG
                                </Button>
                            </form>
                            <TableContainer component={Paper} square elevation={0} className="mt-4">
                                <Table className={classes.table} aria-label="simple table"
                                    size='small'
                                >
                                    <TableHead className={classes.tableHeader}>
                                        <TableRow>
                                            <TableCell> # </TableCell>
                                            <TableCell align="center"> TAG NAME </TableCell>
                                            <TableCell align="center"> ACTION </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {   allTag !== null &&
                                            allTag.map((tag, i) => (
                                                <TableRow key={tag.id}>
                                                    <TableCell component="th" scope="row">
                                                        {i + 1}
                                                    </TableCell>
                                                    <TableCell align="center"> {tag.tag_name} </TableCell>
                                                    <TableCell align="right">
                                                        <div>
                                                            <ButtonGroup
                                                                variant="contained"
                                                                color="primary"
                                                                size="small"
                                                                aria-label="contained primary button group"
                                                            >
                                                                <Button
                                                                    style={{ fontSize: '10px' }} color="primary">UPDATE</Button>
                                                                <Button
                                                                    style={{ fontSize: '10px' }} color="secondary">DELETE</Button>
                                                            </ButtonGroup>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>

                                </Table>
                                <div className={classes.paginationBox}>
                                    <Pagination count={10} className={classes.pagination} />
                                </div>

                            </TableContainer>
                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Tag;