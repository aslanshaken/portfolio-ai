import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserImg from '../assets/images/modal-img.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';
const modalwidget = {
  padding: '30px 30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  overflowY: 'auto',
  //   overflowX: 'hidden',
  '@media (max-width:767px)': {
    justifyContent: 'flex-start',
    padding: '30px 20px',
  },

  '& .MuiPaper-root': {
    backgroundColor: '#2B2C28',
    padding: '30px',
    '@media (max-width:767px)': {
      padding: '20px',
    },
  },
  '& .MuiTypography-h3': {
    fontSize: '1.875rem',
    color: '#FFFFFF !important',
    fontWeight: '900',
    my: '20px',
    textAlign: 'center',
  },
  '& .MuiTypography-root': {
    color: 'rgba(255, 255, 255, 0.60)',
  },
  '& .ModalButton': {
    borderRadius: '14px',
    backgroundColor: '#C4C4C4',
    color: 'black',
    padding: '1rem 0.75rem',
    textTransform: 'none',
    width: '100%',
    maxWidth: '445px',
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#41635C ',
      color: '#fff',
    },
  },
  '& .Icon': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    width: '36px',
    height: '36px',
    backgroundColor: 'white',
    borderRadius: '50%',
    '@media (max-width:767px)': {
      width: '26px',
      height: '26px',
    },
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
  '& .MuiDialog-container': {
    '& .MuiPaper-root': {
      maxWidth: '992px',
      width: '100%',
    },
  },
};

export default function CustomizedDialogs() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/home');
  }

  return (
    <Box sx={modalwidget}>
      <Box
        component="img"
        src={UserImg}
        alt="image"
        sx={{
          maxWidth: '100%',

          display: 'block',
        }}
      />
      <Typography variant="h3">Айнур Жунусова, Финансист</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          gap: 2,
          '@media (max-width:767px)': {
            gap: 1,
          },
        }}
      >
        <Box className="Icon" component="a" href="/#">
          <FacebookOutlinedIcon />
        </Box>
        <Box className="Icon" component="a" href="/#">
          <TwitterIcon />
        </Box>
        <Box className="Icon" component="a" href="/#">
          <LinkedInIcon />
        </Box>
        <Box className="Icon" component="a" href="/#">
          <YouTubeIcon />
        </Box>
        <Box className="Icon" component="a" href="/#">
          <InstagramIcon />
        </Box>
        <Box className="Icon" component="a" href="/#">
          <SendIcon />
        </Box>
        <Box className="Icon" component="a" href="/#">
          <WhatsAppIcon />
        </Box>
      </Box>
      <Typography mb={5} textAlign="center">
        I’m going to show you how to pay less in taxes, sometimes $0.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Button className="ModalButton" variant="contained" onClick={handleClick}>
          Как стать бухгалтером за 2 месяца
        </Button>
        <Button className="ModalButton" variant="contained">
          Быть клиентом Go4Profit
        </Button>
        <Button className="ModalButton" variant="contained">
          Как предпринимателю начать контролировать свои деньги
        </Button>
        <Button className="ModalButton" variant="contained">
          Top 100 Tax Deductions 🤝
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: '3rem',
          color: 'white',
          textAlign: 'center',
        }}
      >
        © 2023 A. Zhunussova All rights reserved.{' '}
      </Box>
    </Box>
  );
}
