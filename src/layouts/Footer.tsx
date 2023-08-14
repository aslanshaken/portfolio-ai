import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import MapMarkerIcon from '@mui/icons-material/Room';
import InstagramIcon from '@mui/icons-material/Instagram';

const style = {
  fontSize: {
    xs: '16px',
    md: '15px',
    lg: '14px',
  },
};

const Footer = () => {
  return (
    <Box component="footer" sx={{ pt: 8, pb: 5 }}>
      <Container>
        <Grid container spacing={2} sx={{ align: { xs: 'center', md: 'left' } }}>
          <Grid item xs={12} sm={6}  >
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.6rem', md: '1.8rem', lg: '2rem' },
                color: '#fff',
                textDecoration: 'none',
                textShadow:
                  '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
                lineHeight: 'normal',
              }}
            >
              <Box component="span" sx={{ color: '#528177' }}>
                П
              </Box>
              рофесиональный
              <br />
              <Box component="span" sx={{ color: '#528177' }}>
                Б
              </Box>
              уккипер
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box display="flex" flexDirection="column" sx={{ gap: { xs: '20px', md: '40px', lg: '60px' } }}>
              <FooterLink
                icon={<EmailIcon sx={{ color: '#41635C', mr: '8px' }} />}
                text="advisory@go4profit.us"
                link="mailto:advisory@go4profit.us"
              />
              <FooterLink
                icon={<MapMarkerIcon sx={{ color: '#41635C', mr: '8px' }} />}
                text="США, штат Техас, г. Остин"
                link="https://goo.gl/maps/qCWvsGt9iLhBCpQG8"
              />
              <FooterLink
                icon={<InstagramIcon sx={{ color: '#41635C', mr: '8px' }} />}
                text="ainura.finance"
                link="https://www.instagram.com/ainura.finance"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ mt: { xs: '20px', md: '-20px' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Box>
              <Typography color="#fff" sx={{ fontSize: { xs: '9px', sm: '11px', md: '13px', lg: '15px' } }}>
                © Go4Profit. Все права защищены
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

interface FooterLinkProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}


const FooterLink: React.FC<FooterLinkProps> = ({ icon, text, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      color="#fff"
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontSize: { xs: '14px', sm: '15px', md: '18px', lg: '20px' },
      }}
    >
      {icon}
      {text}
    </Link>
  );
};

export default Footer;
