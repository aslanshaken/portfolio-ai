import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MapMarkerIcon from '@mui/icons-material/Room';
import InstagramIcon from '@mui/icons-material/Instagram';
import StraightIcon from '@mui/icons-material/Straight';

const style = {
  fontSize: '16px',
  '@media (max-width: 1199px)': {
    fontSize: '15px',
  },
  '@media (max-width: 767px)': {
    fontSize: '14px',
  },
};

export default function Footer() {
  return (
    <Box id="contacts" component="footer" sx={{ pt: 4, pb: 3 }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.6rem', md: '1.8rem', lg: '2rem' },
                color: '#fff',
                textDecoration: 'none',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
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
          <Grid item xs={12} sm={8} md={6} lg={5}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Box sx={{ width: { xs: '100%', sm: 'auto' }, mb: { xs: '15px', sm: '0' } }}>
                <Typography
                  variant="h6"
                  color="#fff"
                  sx={{ mb: { xs: '10px', sm: '20px' }, fontSize: { xs: '16px', md: '18px', lg: '20px' } }}
                >
                  Программа
                </Typography>
                <Box display="flex" flexDirection="column" gap="15px">
                  <Link href="#" color="#fff" sx={style}>
                    Модули
                  </Link>
                  <Link href="#" color="#fff" sx={style}>
                    Преподаватели
                  </Link>
                  <Link href="#" color="#fff" sx={style}>
                    FAQ
                  </Link>
                </Box>
              </Box>
              <Box sx={{ width: { xs: '100%', sm: 'auto' }, mb: { xs: '15px', sm: '0' } }}>
                <Typography
                  variant="h6"
                  color="#fff"
                  sx={{ mb: { xs: '10px', sm: '20px' }, fontSize: { xs: '16px', md: '18px', lg: '20px' } }}
                >
                  Программа
                </Typography>
                <Box display="flex" flexDirection="column" gap="15px">
                  <Link href="#" color="#fff" sx={style}>
                    Модули
                  </Link>
                  <Link href="#" color="#fff" sx={style}>
                    Преподаватели
                  </Link>
                  <Link href="#" color="#fff" sx={style}>
                    FAQ
                  </Link>
                </Box>
              </Box>
              <Box sx={{ width: { xs: '100%', sm: 'auto' }, mb: { xs: '15px', sm: '0' } }}>
                <Typography
                  variant="h6"
                  color="#fff"
                  sx={{ mb: { xs: '10px', sm: '20px' }, fontSize: { xs: '16px', md: '18px', lg: '20px' } }}
                >
                  Программа
                </Typography>
                <Box display="flex" flexDirection="column" gap="15px">
                  <Link href="#" color="#fff" sx={style}>
                    Модули
                  </Link>
                  <Link href="#" color="#fff" sx={style}>
                    Преподаватели
                  </Link>
                  <Link href="#" color="#fff" sx={style}>
                    FAQ
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <StraightIcon sx={{ color: '#41635C', fontSize: '60px' }} />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Box display="flex" flexDirection="column" sx={{ gap: { xs: '20px', md: '40px', lg: '60px' } }}>
              <Link
                href="#"
                color="#fff"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: { xs: '14px', sm: '15px', md: '18px', lg: '20px' },
                }}
              >
                <EmailIcon sx={{ color: '#41635C', mr: '8px' }} />
                advisory@go4profit.us
              </Link>
              <Link
                href="#"
                color="#fff"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: { xs: '14px', sm: '15px', md: '18px', lg: '20px' },
                }}
              >
                <MapMarkerIcon sx={{ color: '#41635C', mr: '8px' }} />
                США, штат Техас, г. Остин
              </Link>
              <Link
                href="#"
                color="#fff"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: { xs: '14px', sm: '15px', md: '18px', lg: '20px' },
                }}
              >
                <InstagramIcon sx={{ color: '#41635C', mr: '8px' }} />
                @ainura.finance
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ mt: { xs: '20px', md: '-20px' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Box>
              <Typography
                color="#fff"
                sx={{
                  fontSize: { xs: '15px', sm: '16px', md: '18px', lg: '20px' },
                  textAlign: { xs: 'left' },
                }}
              >
                © Go4Profit. Все права защищены
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
