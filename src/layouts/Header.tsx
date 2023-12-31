import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Phone from '../assets/images/phone.png';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const drawerWidth = 240;
const navItems = ['Программа', 'Тарифы', 'О нас', 'Контакты'];
const pagePaths = ['program', 'tariffs', 'about', 'contacts'];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const windowObj = typeof window !== 'undefined' ? window : undefined;

  // Function to close the drawer when a menu item is clicked
  const handleMenuItemClick = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography
        noWrap
        component={Link}
        to="/"
        sx={{
          fontWeight: 700,
          fontSize: '1.5rem',
          color: '#2B2C28',
          backgroundColor: '#ececec',
          pl: 2,
          pt: 1,
          pb: 1,
          textDecoration: 'none',
          display: 'flex',
        }}
      >
        <div>
          <span className="TextGradientPrimary">П</span>
          рофесиональный
          <br/>
          <span className="TextGradientPrimary">Б</span>
          уккипер
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item}>
            <Typography
              component={ScrollLink}
              key={item}
              to={pagePaths[index]}
              activeClass="active"
              spy={true}
              smooth={false}
              offset={-90}
              sx={{
                color: 'white',
                display: 'block',
                fontWeight: 500,
                fontSize: '1rem',
                textTransform: 'none',
                textDecoration: 'none',
                cursor: 'pointer',
                '&.active': {
                  color: '#41635C',
                },
              }}
              onClick={handleMenuItemClick}
            >
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = windowObj !== undefined ? () => windowObj.document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          boxShadow: 'none',
          paddingY: '15px',
          backgroundColor: '#2B2C28'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                fontSize: { xs: '1.6rem', sm: '1.8rem', xl: '2rem' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <div>
                <span className="TextGradientPrimary">П</span>
                рофесиональный
                <br/>
                <span className="TextGradientPrimary">Б</span>
                уккипер
              </div>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
              {navItems.map((item, index) => (
                <Typography
                  component={ScrollLink}
                  key={item}
                  to={pagePaths[index]}
                  activeClass="active"
                  spy={true}
                  smooth={false}
                  offset={-125}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: 500,
                    fontSize: { md: '16px', xl: '20px' },
                    textTransform: 'none',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&.active': {
                      color: '#41635C',
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box component="a" marginRight="10px" href="tel:+19172007609">
                <img
                  src={Phone}
                  alt="Phone icon"
                  style={{
                    maxWidth: '100%',
                  }}
                />
              </Box>
              <Typography
                component="a"
                href="tel:+19172007609"
                sx={{
                  fontWeight: 500,
                  fontSize: '15px',
                  color: 'inherit',
                  textDecoration: 'none',
                  display: { xs: 'none', md: 'inline-block' },
                }}
              >
                +1 (917)-200-7609
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              '& .MuiList-root ': {
                '& .MuiTypography-root': {
                  color: '#2B2C28',
                  textAlign: 'left',
                },
              },
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
