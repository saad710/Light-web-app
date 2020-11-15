import { Backdrop, Button, ButtonGroup, Card, CardContent, Fade, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { key } from '../../../apiKey';
import AppBarDrawer from '../AppBarDrawer';
import { useStyles } from './TagStyle';
const axios = require('axios');


const Tag = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [addTag, setAddTag] = useState({});
    const [allTag, setAllTag] = useState(null);
    const [updateValue, setUpdateValue] = useState({})
    const [showOldValue, setShowOldValue] = useState({})

    //get all
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

    const reFetch = () => {
        axios(`${key}tag-all`)
            .then(res => {
                const tags = res.data
                setAllTag(tags)
            })
            .then(err => {
                console.log(err);
            })
    }

    // add new tag
    const handleTagInput = (e) => {
        const newTag = { ...addTag }
        newTag[e.target.name] = e.target.value
        setAddTag(newTag)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const tag_name = { ...addTag }
        console.log(tag_name);
        axios.post(`${key}create-tag`, tag_name)
            .then(res => {
                reFetch()
            })
            .catch(err => {
                console.log(err);
            })
        e.preventDefault();
    }


    // delete feature
    const handleTagDelete = (name) => {
        axios.delete(`${key}tag-delete/${name}`)
            .then(res => {
                console.log(res.data);
                const fil = allTag.filter(newTag => newTag.id !== res.data.id)
                setAllTag(fil)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    // update feature
    const handleOldValue = (name) => {
        console.log(name);
        setShowOldValue(name)
    }
    const handleUpdateTagInput = (e) => {
        const updateTag = { ...updateValue }
        updateTag[e.target.name] = e.target.value
        setUpdateValue(updateTag)
    }

    const handleUpdateSubmit = (e) => {
        const newTag = { ...updateValue }

        axios.put(`${key}tag-update/${showOldValue}`, newTag)
            .then((res) => {
                console.log(res.data);
                reFetch()
            })
            .catch((error) => console.log(error));
        e.preventDefault();
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
                                        {allTag !== null &&
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
                                                                    style={{ fontSize: '10px' }} color="primary"
                                                                    onClick={() => { handleOpen(); handleOldValue(tag.tag_name) }}
                                                                >
                                                                    UPDATE
                                                                </Button>
                                                                <Button
                                                                    style={{ fontSize: '10px' }} color="secondary"
                                                                    onClick={() => handleTagDelete(tag.tag_name)}
                                                                >
                                                                    DELETE
                                                                </Button>
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
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <div className={classes.customerPaper}>
                                        <div className="mt-3">
                                            <Card className={classes.cardRoot}>
                                                <CardContent style={{ background: 'none !important' }}>
                                                    <div className={classes.paper}>
                                                        <div>
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
                                                                        onChange={handleUpdateTagInput}
                                                                    />
                                                                </div>


                                                                <Button
                                                                    style={{ padding: '0.4rem 0', margin: '1rem 0', fontSize: '12px' }}
                                                                    type="submit"
                                                                    fullWidth
                                                                    variant="contained"
                                                                    color="primary"
                                                                    className={classes.submit}
                                                                    onClick={handleUpdateSubmit}
                                                                >
                                                                    ADD TAG
                                                                </Button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </Fade>
                            </Modal>
                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Tag;