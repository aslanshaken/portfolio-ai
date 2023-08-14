import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone-circle.svg';
import { MenuItem } from '@mui/material';

const pages = ['Программа', 'Тарифы', 'О нас', 'Контакты'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginTop: '30px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
{/* WEB */}
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              fontSize: '1.5rem',
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '18px', textTransform: 'none' }}
              >
                {page}
              </Button>
            ))}
          </Box>

{/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              fontSize: {xs:'1.5rem', sm:"1.8rem",  lg:"2rem"},
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

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1 }}>
           <Box component="a"  href="tel:+1(917)200-7609" marginRight='10px'> <PhoneIcon /></Box>
            <Typography
              component="a"
              href="tel:+1 (917)200-7609"
              sx={{
                fontWeight: 500,
                fontSize: '18px',
                color: 'inherit',
                textDecoration: 'none',
                display:{xs:"none" , md:"inline-block"}
              }}
            >
              +1 (917)-200-7609
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
