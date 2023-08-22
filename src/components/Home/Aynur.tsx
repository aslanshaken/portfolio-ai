import { Grid, Container, Box, Typography, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import Qbo from '../../assets/images/qbo-badge.png';
import Qbo2 from '../../assets/images/QBO Advanced badge.png';
import Gusto from '../../assets/images/gusto-gold-partner.png';
import Financial from '../../assets/images/financial-analysis-badge.png';
import Shopify from '../../assets/images/shopify-partner.png';
import Bbl from '../../assets/images/bbl-badge.png';
import AynurImage from '../../assets/images/aynur-img.png';
import AynurBg from '../../assets/images/aynur-bg.jpg';

const Aynur = () => {
  const theme = useTheme();
  return (
    <>
      <Container id="about" sx={{ pt: 10 }}>
        <Typography variant="h2" mb={6}>
          <Box component="span" className="TextGradientPrimary">
            КТО ПРОВОДИТ
          </Box>{' '}
          ОБУЧЕНИЕ?
        </Typography>
      </Container>
      <Box
        sx={{
          backgroundImage: `url(${AynurBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          paddingTop: '60px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md>
              <Typography variant="h2" mb={6}>
                АЙНУР ЖУНУСОВА
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <Typography>Практикующий финансовый аналитик</Typography>
                <Typography>Степень Бакалавра В Финансах в США</Typography>
                <Typography>Основатель Бухгалтерской компании Go4Profit</Typography>
                <Typography>Клиенты с Forbes</Typography>
                <Typography>Преподаватель в онлайн-школе буккипинга</Typography>
              </Box>
              <Button
                variant="contained"
                target='_blank' 
                href="https://forms.gle/6P1oDBp2BXWKbNJh7"
                sx={{
                  marginTop: '60px',
                  marginBottom: '60px',
                  borderRadius: '500px',
                  fontSize: 22,
                  padding: '11px 28px',
                  background: 'linear-gradient(132deg, #232323 0%, rgba(35, 35, 35, 0.49) 100%)',
                  boxShadow:
                    '10px 9px 12px 0px rgba(3, 3, 3, 0.79) inset, 1px -1px 19px 0px rgba(133, 133, 133, 0.25) inset',
                }}
              >
                Оставить заявку
                <Box
                  component="span"
                  sx={{
                    width: 66,
                    height: 66,
                    borderRadius: '50%',
                    backgroundColor: '#242524',
                    boxShadow: '-3px -2px 11px 0px rgba(109, 109, 109, 0.19), 2px 2px 12px 0px rgba(0, 0, 0, 0.34)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 2,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 43,
                      height: 43,
                      borderRadius: '50%',
                      background: theme.palette.gradient.warning,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon
                      sx={{
                        color: '#fff',
                        fontSize: '1.3rem',
                      }}
                    />
                  </Box>
                </Box>
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={Qbo}
                  alt="Banner image"
                  sx={{
                    maxWidth: '80%',
                  }}
                />

                <Box
                  component="img"
                  src={Gusto}
                  alt="Banner image"
                  sx={{
                    maxWidth: '80%',
                  }}
                />

                <Box
                  component="img"
                  src={Financial}
                  alt="Banner image"
                  sx={{
                    maxWidth: '80%',
                  }}
                />

                <Box
                  component="img"
                  src={Shopify}
                  alt="Banner image"
                  sx={{
                    maxWidth: '80%',
                  }}
                />

                <Box
                  component="img"
                  src={Bbl}
                  alt="Banner image"
                  sx={{
                    maxWidth: '80%',
                  }}
                />

                <Box
                  component="img"
                  src={Qbo2}
                  alt="Banner image"
                  sx={{
                    maxWidth: '80%',
                  }}
                />
              </Box>
            </Grid>
            <Grid item md="auto">
              <Box
                component="img"
                src={AynurImage}
                alt="image"
                sx={{
                  maxWidth: '75%',
                  display: { xs: 'none', md: 'flex' },
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            position: 'relative',
            zIndex: -1,
            marginTop: '-12%',
            '& svg': {
              width: '100%',
            },
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Aynur;
