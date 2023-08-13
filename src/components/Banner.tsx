import { Grid, Container, Box, Button } from '@mui/material';
import BannerImg from '../assets/images/banner-img.png';
const Banner = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} md={8}>
            <Box
              component="h1"
              sx={{
                color: '#fff',
                fontSize: 50,
              }}
            >
              Освой профессию <span className="TextGradientPrimary">буккипера</span>, <Box component="br"></Box>
              получай <span className="TextGradientPrimary">доход</span> с любой точки мира
            </Box>
            <Box
              component="h3"
              sx={{
                color: '#fff',
                fontSize: 24,
                fontWeight: 500,
              }}
            >
              С нуля за 2 месяца от <span className="TextGradientPrimary">$5000 в месяц</span>
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: '500px',
                fontSize: 22,
                padding: '11px 28px',
                background: 'linear-gradient(132deg, #232323 0%, rgba(35, 35, 35, 0.49) 100%)',
                boxShadow:
                  '10px 9px 12px 0px rgba(3, 3, 3, 0.79) inset, 1px -1px 19px 0px rgba(133, 133, 133, 0.25) inset',
              }}
            >
              Оставить заявку
            </Button>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
              component="img"
              src={BannerImg}
              alt="Banner image"
              sx={{
                maxWidth: '100%',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
