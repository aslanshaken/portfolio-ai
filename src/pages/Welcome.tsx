import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import UserImg from '../assets/images/modal-img.png';
import {
  FacebookOutlined as FacebookIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  Send as SendIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondButtonText?: string; 
  secondButtonLink?: string;
  disabled?: boolean;
}

const socialIcons = [
  { icon: InstagramIcon, link: 'https://www.instagram.com/ainura.finance' },
  { icon: FacebookIcon, link: 'https://www.facebook.com/profile.php?id=100090558631045&mibextid=9R9pXO' },
  { icon: LinkedInIcon, link: 'https://www.linkedin.com/in/ainurzhunussova' },
  { icon: SendIcon, link: '#' },
  { icon: WhatsAppIcon, link: '#' },
  { icon: YouTubeIcon, link: 'https://www.youtube.com/@go4profitadvisor' },
];

const socialIconsStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '30px',
  gap: '10px',
};

const buttonStyle = {
  display: 'block',
  margin: '0 auto',
  width: '100%',
  height: 'auto',
  borderRadius: '20px',
};

const CourseCard: React.FC<CourseCardProps> = ({ title, description, buttonText, buttonLink, secondButtonText, secondButtonLink, disabled }) => {
  const navigate = useNavigate();

  const handleNavigation = (link: string) => {
    if (link.startsWith('http')) {
      window.location.href = link;
    } else {
      navigate(link);
    }
  };

  const cardStyle = disabled ? { backgroundColor: '#b0b0b0', filter: 'blur(0.4px)' } : { backgroundColor: '#41635C' };

  return (
    <div className="ModalButton" style={{ marginBottom: '15px', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', ...cardStyle }}>
      <Typography variant='subtitle1' fontWeight="bold" align="center" style={{ color: 'white', marginBottom: '10px' }}>
        {title}
      </Typography>
      <Typography variant='body2' align="center" style={{ color: 'white', marginBottom: '20px' }}>
        {description}
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          variant="contained"
          className="courseButton"
          onClick={() => !disabled && handleNavigation(buttonLink)}
          style={{ ...buttonStyle, marginBottom: '10px', backgroundColor: disabled ? '#b0b0b0' : '#5482FC', color: 'white' }}
          disabled={disabled}
        >
          {disabled ? 'Coming Soon' : buttonText}
        </Button>
        {secondButtonText && secondButtonLink && (
          <Button
            variant="contained"
            className="courseButton"
            onClick={() => !disabled && handleNavigation(secondButtonLink)}
            style={{ ...buttonStyle, backgroundColor: disabled ? '#b0b0b0' : '#5482FC', color: 'white' }}
            disabled={disabled}
          >
            {secondButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

const CustomizedDialogs = () => (
  <Box
    sx={{
      padding: '30px 10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'auto',
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
        maxWidth: '545px',
        border: 'none',
        fontSize: '16px',
        fontWeight: 500,
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
    }}
  >
    <Box
      component="img"
      src={UserImg}
      alt="image"
      sx={{
        maxWidth: '100%',
        display: 'block',
      }}
    />
    <Typography variant="h3">Ainur Zhunussova, Accountant</Typography>
    <Box sx={socialIconsStyle}>
      {socialIcons.map(({ icon: Icon, link }, index) => (
        <Box
          key={index}
          className="Icon"
          component="a"
          target='_blank'
          href={link}
        >
          <Icon />
        </Box>
      ))}
    </Box>
    <CourseCard
      title="Нужна помощь с ведением бухгалтерии?"
      description="Расширьте возможности своего бизнеса, передав бухгалтерию на аутсорсинг. Давайте встретимся и посмотрим, подойдет ли оно!"
      buttonText="Выберите время (Это бесплатно)"
      buttonLink="/accounting-help"
      secondButtonLink='https://go4profit.us/'
      secondButtonText='Сайт Go4Profit'
    />
    <CourseCard
      title="Курс “Буккипер XXI века”"
      description="Расширьте свои карьерные возможности, освоив профессию буккипера! Получите 3 бесплатных урока чтобы понять подойдет ли этот курс для вас!"
      buttonText="Сайт курса"
      buttonLink="/course"
      secondButtonLink='https://wa.me/77776270419?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%BF%D0%BE%20%D0%B1%D1%83%D0%BA%D0%BA%D0%B8%D0%BF%D0%B8%D0%BD%D0%B3%D1%83%20'
      secondButtonText='Написать менеджеру'
    />
    <CourseCard
      title="Тренинг в Quickbooks"
      description="Персонализированное индивидуальное обучение по вопросам финансов вашего бизнеса и помощь QuickBooks"
      buttonText="Выберите время"
      buttonLink="/quickbooks-courses"
      secondButtonLink=''
      secondButtonText=''
    />
    <CourseCard
      title="Обучение QuickBooks для владельцев бизнеса"
      description="Сократите время на бухгалтерию с помощью обучения QuickBooks! Получите 5 бесплатных уроков чтобы понять подойдет ли этот курс для вас!"
      buttonText="Начать"
      buttonLink="/"
      secondButtonLink=''
      secondButtonText=''
      disabled
    />
    <Box
      sx={{
        marginTop: '5rem',
        color: 'white',
        textAlign: 'center',
      }}
    >
      © 2024 Ainur Zhunussova. All rights reserved.
    </Box>
  </Box>
);

export default CustomizedDialogs;
