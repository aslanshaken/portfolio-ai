import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const coursefees_grid = {
  marginBottom: '30px',
  '& .MuiPaper-root': {
    background: '#fff',
    borderRadius: '15px',
    paddingTop: '0px',
    '@media (max-width:991px)': {
      padding: '0px 20px 20px',
    },
    '& h5.MuiTypography-root': {
      background: 'var(--greengradient, linear-gradient(137deg, #41635C 0%, #528177 100%))',
      display: 'inline-block',
      color: '#fff',
      minWidth: '250px',
      padding: '16px 0px',
      marginTop: '-50px',
      position: 'relative',
      top: '-10px',
      boxShadow: '0px 4px 40px 0px rgba(0, 0, 0, 0.50)',
      borderRadius: '70px',
      '@media (max-width:1440px)': {
        padding: '8px 0px',
        fontSize: '23px',
      },
      '@media (max-width:1199px)': {
        minWidth: '80%',
        fontSize: '21px',
      },
      '@media (max-width: 991px)': {
        fontSize: '18px',
        minWidth: 'auto',
        padding: '10px 30px',
      },
      '@media (max-width: 768px)': {
        fontSize: '16px',
      },
    },
    '& .MuiList-root': {
      '& .MuiListItem-root': {
        color: '#000',
        fontWeight: '500',
        fontSize: '20px',
        padding: 0,
        marginBottom: '20px',
        lineHeight: 'normal',
        '@media (max-width:1280px)': {
          fontSize: '16px',
        },
        '@media (max-width:991px)': {
          fontSize: '15px',
        },
      },
    },
    '& .MuiButtonBase-root': {
      background: '#41635C',
      borderRadius: '9px',
      padding: { xs: '5px 20px', lg: '7px 30px' },
      fontSize: { xs: '16px', md: '20px', lg: '21px', xl: '25px' },
      marginTop: '10px',
    },
  },
};
const CourseFees = () => {
  return (
    <Container id="tariffs" sx={{ pt: 10 }}>
      <Typography variant="h2" mb={2}>
        <Box component="span" className="TextGradientPrimary">
          ТАРИФЫ{' '}
        </Box>{' '}
        КУРСА
      </Typography>
      <Grid container spacing={2} sx={{ py: 3, alignItems: 'end' }}>
        <Grid item xs={12} md={4} sx={coursefees_grid}>
          <Paper sx={{ p: 3, textAlign: 'center', color: 'text.secondary', background: '#fff' }}>
            <Typography variant="h5">Базовый</Typography>
            <List>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Полное техническое знание по Quikcbooks
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Доступно с 1 по 10 модуль
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Доступ на курсы 6 месяцев
              </ListItem>
            </List>
            <Box>
              <Typography
                component="span"
                sx={{
                  fontWeight: '600',
                  position: 'relative',
                  fontSize: { xs: '16px', md: '18px', lg: '22px', xl: '24px', color: '#828282' },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    transform: 'rotate(15deg)',
                    transformOrigin: 'top left',
                    background: '#41635C',
                    top: '3px',
                    width: '100%',
                    height: '3px',
                  }}
                ></Box>
                $650
              </Typography>
              <br />
              <Typography
                component="span"
                sx={{
                  fontWeight: '600',
                  fontSize: { xs: '16px', md: '18px', lg: '22px', xl: '24px', color: '#828282' },
                }}
              >
                $500
              </Typography>
            </Box>
            <Button variant="contained" target='_blank' href="https://buy.stripe.com/cN2eYi1c8gCx7ksaEQ">Приобрести</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={coursefees_grid}>
          <Paper sx={{ p: 3, textAlign: 'center', color: 'text.secondary', background: '#fff' }}>
            <Typography variant="h5">Стандарт</Typography>
            <List>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#F9CF3D', mr: '10px' }} />
                Все, что в БАЗОВОМ ТАРИФЕ
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />+ Именной сертификат после сдачи
                экзамена
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />+ Рекомендательное письмо лично от Айнур для трудоустройства
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                + Уроки от HR, который поделится секретами успешного трудоустройства
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                + Как найти своего первого клиента: от начало до конца
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                + Личная консультация от Айнур
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                + Доступ к участникам курса, которые успешно завершили программу и уже работают в соответствующей сфере. Они будут доступны в общем чате, где готовы ответить на ваши вопросы.
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                + Доступ к материалам: 12 месяцев
              </ListItem>
            </List>
            <Box>
              <Typography
                component="span"
                sx={{
                  fontWeight: '600',
                  position: 'relative',
                  fontSize: { xs: '16px', md: '18px', lg: '22px', xl: '24px', color: '#828282' },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    transform: 'rotate(15deg)',
                    transformOrigin: 'top left',
                    background: '#41635C',
                    top: '3px',
                    width: '100%',
                    height: '3px',
                  }}
                ></Box>
                $1500
              </Typography>
              <br />
              <Typography component="span" sx={{ fontWeight: '600', fontSize: { color: '#828282' } }}>
                $957
              </Typography>
            </Box>
            <Button variant="contained" target='_blank' href="https://buy.stripe.com/14k7vQ1c8gCxawE289">Купить</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={coursefees_grid}>
          <Paper
            sx={{
              p: 3,
              textAlign: 'center',
              color: 'text.secondary',
              background: '#fff',
              position: 'relative',
              top: { xs: '0px', md: '40px' },
            }}
          >
            <Typography
              variant="h5"
              sx={{ background: 'var(--yellow, linear-gradient(137deg, #F9CF3D 0%, #FF9B3F 100%)) !important' }}
            >
              Наставничество
            </Typography>
            <List sx={{ pt: 3 }}>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#F9CF3D', mr: '10px' }} />
                Доступ ко всем модулям и бонусам
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Составление личного плана по созданию бухгалтерской компании
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Регистрация бизнеса + страховки чтобы обезопасить свою компанию
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Личные встречи с Айнур каждую неделю
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Готовые бизнес процессы, CRM системы, стратегии роста от Айнур
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Совпровождение на всех этапах обучения
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Длительность наставничества 6 месяцев
              </ListItem>
              <ListItem>
                {' '}
                <CheckCircleRoundedIcon sx={{ color: '#41635C', mr: '10px' }} />
                Доступ в течении 3х лет ко всем текущим и будущим материалам
              </ListItem>
            </List>
            <Box>
              <Typography
                component="span"
                sx={{
                  fontWeight: '600',
                  fontSize: { xs: '16px', md: '18px', lg: '22px', xl: '24px', color: '#828282' },
                }}
              >
                $3000
              </Typography>
            </Box>
            <Button variant="contained">SOLD OUT</Button>
          </Paper>
          <Button
            variant="contained"
             target='_blank' 
              href="https://forms.gle/NCEaETfLQUpgdvFp7"
            sx={{
              background: '#41635C',
              justifyContent: 'center',
              padding: '8px 30px',
              display: 'flex',
              borderRadius: '9px',
              marginTop: '2px',
              position: 'relative',
              top: { xs: '0', md: '40px' },
              mx: 'auto',
            }}
          >
            Оставить заявку
          </Button>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        onClick={()=> window.open("https://wa.me/9172007609", '_blank')}
        sx={{
          background: 'var(--yellow, linear-gradient(137deg, #F9CF3D 0%, #FF9B3F 100%))',
          justifyContent: 'center',
          margin: '20px auto 0',
          padding: '8px 30px',
          display: 'flex',
          marginTop: '30px',
        }}
      >
        Остались вопросы
      </Button>
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          marginTop: '20px',
          color: '#C5C5C5',
          fontSize: '25px',
          fontStyle: 'italic',
        }}
      >
        <Box component="span" sx={{ margin: 'auto' }}>
          Есть рассрочка через Klarna (Stripe)
        </Box>
      </Box>
    </Container>
  );
};

export default CourseFees;
