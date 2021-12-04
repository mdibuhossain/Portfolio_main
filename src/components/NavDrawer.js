import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useRouteMatch,
    Outlet
} from "react-router-dom";
import { createStyles, makeStyles } from '@mui/styles';


const drawerWidth = 250;

const useStyle = makeStyles((theme) => createStyles({
    menuIcon: {
        color: 'white'
    }
}));

export default function NavDrawer() {
    // const { window } = props;
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
                <Link to='/' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Hero" />
                    </ListItem>
                </Link>
                <Link to='/about' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="About me" />
                    </ListItem>
                </Link>
                <Link to='/portfolio' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItem>
                </Link>
                <Link to='/projects' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItem>
                </Link>
                <Link to='/contact' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon className={menuIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Contact me" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
        </div>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

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
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ backgroundColor: 'rgb(17, 17, 17)', width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            // position: 'relative',
                            backgroundColor: 'rgb(12, 12, 12)',
                            opacity: '0.9',
                            color: 'white'
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
                            backgroundColor: 'rgb(12, 12, 12)',
                            opacity: '0.9',
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
                <Outlet />
            </Box>
        </Box >
    );
}
