import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../components/asset/images/Logo.png'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Drawer, List } from '@mui/material';
import { useTheme } from '@emotion/react';

const pages = ['About Us', 'Our Services', 'Digital Bootcamp', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '86px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '28% !important',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    const drawerWidth = 240;
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d200", boxShadow: "none", padding: { xs: "30px 30px", sm: "30px 30px", md: " 70px 30px" } }} >
            <Toolbar disableGutters style={{ display: "flex", justifyContent: "space-between" }}>
                <div className='headerBg'></div>
                <img src={logo} height={"25%"} width={"25%"} />
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "center", alignItem: "center", flexDirection: "column" } }}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "space-around" } }}>
                        {pages.map((page) => (
                            <Button
                                style={{ textTransform: "capitalize" }}
                                className="font menu"
                                key={page}
                                onClick={handleDrawerClose}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>

                </Box>
                <>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleDrawerOpen}
                        color="inherit"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                </>


            </Toolbar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#5F0E73',
                        color: '#FFFFFF',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}

            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} style={{ color: "#ffffff" }}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List style={{ textAlign: "center" }}>
                    <img src={logo} height={"90%"} width={"80%"} style={{ paddingLeft: "20px" }} />
                </List>
                <List>
                    {pages.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton style={{ textAlign: "center" }}>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
        </AppBar>
    );
}
export default ResponsiveAppBar;
