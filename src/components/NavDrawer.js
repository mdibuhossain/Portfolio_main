import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {
    Outlet
} from "react-router-dom";
import { createStyles, makeStyles } from '@mui/styles';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Typography } from '@mui/material';


const drawerWidth = 300;

const useStyle = makeStyles((theme) => createStyles({
    menuIcon: {
        color: 'white'
    },
    linkStyle: {
        display: 'flex',
        textDecoration: 'none',
        color: 'inherit',
    },
    linkInnerStyle: {
        width: '100%',
        padding: '15px 0',
        position: 'relative',
        display: 'inline-block',
        fontWeight: '300 !important',
        letterSpacing: '5px !important',
        transition: 'all 0.225s ease-in-out',
        borderBottom: '0.75px solid rgba(200, 200, 200, 0.125)',
        '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            height: '1px',
            width: '0%',
            bottom: '0',
            backgroundColor: 'rgb(132, 193, 255)',
            transition: 'all 0.325s ease-in-out'
        },
        '&:hover:after': {
            width: '100%',
        },
        '&:hover': {
            fontWeight: '300',
            color: 'rgb(132, 193, 255) !important',
        }
    }
}));


export default function NavDrawer() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { linkInnerStyle, linkStyle } = useStyle();
    const drawer = (
        <div >
            <Toolbar />
            {/* <Divider /> */}
            <List>
                <Link smooth={true}
                    to='top'
                    className={linkStyle}
                >
                    {/* <ListItem button> */}
                    <Typography onClick={handleDrawerToggle} className={linkInnerStyle}>Hero</Typography>
                    {/* </ListItem> */}
                </Link>
                <Link smooth={true}
                    to='about'
                    className={linkStyle}
                >
                    {/* <ListItem button> */}
                    <Typography onClick={handleDrawerToggle} className={linkInnerStyle}>About me</Typography>
                    {/* </ListItem> */}
                </Link>
                <Link smooth={true} to='portfolio' className={linkStyle}>
                    {/* <ListItem button> */}
                    <Typography onClick={handleDrawerToggle} className={linkInnerStyle}>Portfolio</Typography>
                    {/* </ListItem> */}
                </Link>
                {/* <Link smooth={true} to='blogs' className={linkStyle}>
                    // <ListItem button>
                        <Typography onClick={handleDrawerToggle} className={linkInnerStyle}>Blogs</Typography>
                    // </ListItem>
                </Link> */}
                <Link smooth={true} to='contact' className={linkStyle}>
                    {/* <ListItem button> */}
                    <Typography onClick={handleDrawerToggle} className={linkInnerStyle}>Contact me</Typography>
                    {/* </ListItem> */}
                </Link>
            </List>
            {/* <Divider /> */}
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    background: 'none', boxShadow: 'none', width: { lg: `calc(100% - ${drawerWidth}px)` },
                    ml: { lg: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ display: { lg: 'none' } }} >
                    <IconButton
                        // color="inherit"
                        aria-label="open drawer"
                        // edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 'auto', display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <SwipeableDrawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    onOpen={handleDrawerToggle}
                    PaperProps={{
                        sx: {
                            position: 'relative',
                            backgroundColor: 'rgb(17, 17, 17)',
                            px: 5,
                            // color: 'white'
                        }
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(17, 17, 17, 1)', filter: 'blur(3px)', zIndex: '-1' }}></div>
                    {drawer}
                </SwipeableDrawer>
                <Drawer
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            backgroundColor: 'rgba(17, 17, 17, 1)',
                            opacity: '1',
                            px: 5,
                            color: 'white'
                        }
                    }}
                    sx={{
                        position: 'relative', display: { xs: 'none', lg: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(10, 10, 10,0.2)', filter: 'blur(3px)', zIndex: '-1' }}></div>
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, height: '100vh', width: { lg: `calc(100% - ${drawerWidth}px)` } }}
            >
                {/* <Toolbar sx={{ display: { lg: 'none' } }} /> */}
                {/* <Hero />
                <About />
                <Portfolio />
                <Contact /> */}
                <Outlet />
            </Box>
        </Box >
    );
}
