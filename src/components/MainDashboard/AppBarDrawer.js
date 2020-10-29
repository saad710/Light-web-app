import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Avatar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import avatar from '../../images/avatar.png'
import MenuItem from '../../components/MainDashboard/MenuItem/MenuItem'
import { useStyles } from './AppBarDrawerStyle';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useState } from 'react';
import SentFilter from './SentFilter/SentFilter';


const AppBarDrawer = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [openFilter, setOpenFilter] = useState(false)
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon} >
                            <SearchIcon
                            />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            style={{ color: '#2d2d2d' }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                        {
                            openFilter && <SentFilter />
                        }
                    <FilterListIcon
                        onClick={() => setOpenFilter(!openFilter)}
                        style={{ marginRight: '1rem', color: '#2d2d2d' }}
                    />
                    
                    
                    <Divider className={classes.horizontalDivider} orientation="vertical" flexItem />
                    <Avatar aria-label="recipe" variant="circle" className={classes.avatar}>
                        <img width="100%" src={avatar} alt="" />
                    </Avatar>
                </Toolbar>
            </AppBar>


            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >

                <div className="d-flex align-items-center">
                    <Typography style={{ padding: '1.2rem 2rem'}}>
                        Client Web App
                    </Typography>
                    {/* <IconButton onClick={handleDrawerClose} style={{ color: '#4195D1' }}>
                        <ChevronLeftIcon />
                    </IconButton> */}
                </div>
                <Divider />
                {/* <List>{mainListItems}</List> */}
                <MenuItem />

            </Drawer>
        </div>
    );
};

export default AppBarDrawer;