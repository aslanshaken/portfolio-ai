import { Grid, Container, Box, Button, Typography } from '@mui/material';
import BannerImg from '../assets/images/banner-img.png';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import { ReactComponent as BannerNeonText } from '../assets/images/banner-neon-text.svg';

const Banner = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(180deg, rgba(43, 44, 40, 0.00) 39.58%, #2B2C28 88.41%)',
          paddingBottom: '50px',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item sm={6} md>
              <Box
                sx={{
                  paddingTop: '70px',
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: '#fff',

                    marginTop: 0,
                    marginBottom: '40px',
                  }}
                >
                  Освой профессию <span className="TextGradientPrimary">буккипера</span>, <Box component="br" />
                  получай <span className="TextGradientPrimary">доход</span> с любой точки мира
                </Typography>
                <Box
                  component="h3"
                  sx={{
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                  }}
                >
                  С нуля за 2 месяца от{' '}
                  <span className="TextGradientPrimary">
                    $5000
                    <Box component="br" />в месяц
                  </span>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '60px',
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
                        background: theme.palette.gradient.primary,
                        display: 'flex',
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
              </Box>
            </Grid>
            <Grid item sm={6} md="auto">
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src={BannerImg}
                  alt="Banner image"
                  sx={{
                    maxWidth: '100%',
                  }}
                />
                <Box
                  sx={{
                    borderRadius: '349px',
                    background: 'rgba(72, 112, 103, 0.66)',
                    filter: 'blur(150px)',
                    position: 'absolute',
                    width: '349px',
                    height: '349px',
                    top: '17%',
                    zIndex: -1,
                    right: '0',
                  }}
                ></Box>
              </Box>
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
            display:{xs:"none" , md:"inline-block"}
          }}
        >
          <BannerNeonText />
        </Box>
      </Box>
    </>
  );
};

export default Banner;
