import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserImg from '../assets/images/modal-img.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';

const modalwidget = {
  padding: '30px 10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  overflowY: 'auto',
  //   overflowX: 'hidden',
  '@media (max-width:767px)': {
    justifyContent: 'flex-start',
    padding: '30px 10px',
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
    fontWeight: '400',
    my: '20px',
    textAlign: 'center',
  },
  '& .MuiTypography-root': {
    color: 'rgba(255, 255, 255, 0.60)',
  },
  '& .ModalButton': {
    borderRadius: '20px',
    backgroundColor: '#41635C',
    color: 'white',
    padding: '1.5rem 2rem',
    textTransform: 'none',
    width: '100%',
    maxWidth: '445px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'white ',
      color: 'black',
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
        <Box className="Icon" component="a" target='_blank' href="https://www.instagram.com/ainura.finance">
          <InstagramIcon />
        </Box>
        <Box className="Icon" component="a" target='_blank' href="https://www.facebook.com/profile.php?id=100090558631045&mibextid=9R9pXO">
          <FacebookOutlinedIcon />
        </Box>
        <Box className="Icon" component="a" target='_blank' href="https://www.linkedin.com/in/ainurzhunussova">
          <LinkedInIcon />
        </Box>
        <Box className="Icon" component="a" target='_blank' href="/#">
          <SendIcon />
        </Box>
        <Box className="Icon" component="a" target='_blank' href="/#">
          <WhatsAppIcon />
        </Box>
        <Box className="Icon" component="a" target='_blank' href="https://www.youtube.com/@go4profitadvisor">
          <YouTubeIcon />
        </Box>
      </Box>
      <Typography mb={5} textAlign="center">
        Мудрый человек держит деньги в голове, но не в сердце
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
        <Button className="ModalButton" variant="contained" onClick={()=> window.open('/course', '_blank')}>
          Как стать бухгалтером за 2 месяца
        </Button>
        <Button className="ModalButton" onClick={()=> window.open('https://www.go4profit.us', '_blank')} variant="contained"> 
          Быть клиентом Go4Profit
        </Button>
        <Button className="ModalButton" variant="contained">
          Top 100 Tax Deductions 🤝
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: '5rem',
          color: 'white',
          textAlign: 'center',
        }}
      >
        © 2023 Ainur Zhunussova. All rights reserved. {' '}
      </Box>
    </Box>
  );
}
