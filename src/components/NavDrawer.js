import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {
    Outlet
} from "react-router-dom";
import { createStyles, makeStyles } from '@mui/styles';
import { NavHashLink as Link } from 'react-router-hash-link';


const drawerWidth = 250;

const useStyle = makeStyles((theme) => createStyles({
    menuIcon: {
        color: 'white'
    }
}));

export default function NavDrawer() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { menuIcon } = useStyle();
    const drawer = (
        <div >
            {/* <Toolbar /> */}
            {/* <Divider /> */}
            <List>
                <Link smooth={true}
                    to='top'
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Hero" />
                    </ListItem>
                </Link>
                <Link smooth={true}
                    to='about'
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="About me" />
                    </ListItem>
                </Link>
                <Link smooth={true} to='portfolio' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItem>
                </Link>
                {/* <Link smooth={true} to='blogs' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Blogs" />
                    </ListItem>
                </Link> */}
                <Link smooth={true} to='contact' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Contact me" />
                    </ListItem>
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
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            position: 'relative',
                            // backgroundColor: 'rgb(17, 17, 17)',
                            backgroundColor: 'rgb(44, 50, 53)',
                            opacity: '1',
                            // color: 'white'
                        }
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(10, 10, 10,0.2)', filter: 'blur(3px)', zIndex: '-1' }}></div>
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            // position: 'relative',
                            // backgroundColor: 'black',
                            backgroundColor: 'rgb(44, 50, 53)',
                            opacity: '1',
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
