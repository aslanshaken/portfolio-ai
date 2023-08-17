import { Container, Grid, Paper, Typography, Box, Stack } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import CourseBg from '../../assets/images/coursebg.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const gridsection = {
  '& h2.MuiTypography-root': {
    backgroundImage: 'linear-gradient(137deg, rgba(65, 99, 92, 0.50) 0%, rgba(82, 129, 119, 0.50) 100%)',
    backgroundClip: 'text',
    fontSize: '169.936px !important',
    fontWeight: '700',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '@media (max-width:1440px)': {
      fontSize: '150px !important',
    },
    '@media (max-width:1199px)': {
      fontSize: '140px !important',
    },
    '@media (max-width:991px)': {
      fontSize: '130px !important',
    },
    '@media (max-width:767px)': {
      fontSize: '120px !important',
    },
  },
  '& h3.MuiTypography-root': {
    color: '#FFFFFF',
    fontSize: '25px',
    fontWeight: '600',
    '@media (max-width: 1440px)': {
      fontSize: '23px',
    },
    '@media (max-width: 1199px)': {
      fontSize: '21px',
    },
    '@media (max-width: 768px)': {
      fontSize: '16px',
      maxWidth: '100%',
    },
  },
  '& p.MuiBox-root': {
    color: '#fff',
    fontSize: '12.9px',
    marginTop: '9px',
    letterSpacing: '0.645px',
  },
  '& .MuiStack-root': {
    marginTop: '-120px',
    paddingLeft: '120px',
    '@media (max-width:991px)': {
      marginTop: '-90px',
      paddingLeft: '70px',
    },
    '@media (max-width:767px)': {
      paddingLeft: '0px',
    },
  },
};
export default function ResponsiveGrid() {
  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h2" mb={6}>
        <Box component="span" className="TextGradientPrimary">
          ЧТО ВАС ЖДЕТ
        </Box>{' '}
        НА КУРСЕ?
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: `url(${CourseBg})`,
          backgroundSize: 'cover',
          padding: '50px  50px 50px 50px',
          borderRadius: '10px',
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={gridsection}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h2">01</Typography>
              <Stack>
                <Typography variant="h3">Обучающая онлайн-платформа</Typography>
                <Box component="p">
                  У каждого ученика будет личный кабинет, где он сможет просматривать уроки и сдавать экзамен.
                </Box>
              </Stack>
            </Box>
            <Box>
              <Typography variant="h2">02</Typography>
              <Stack>
                <Typography variant="h3">Практика с реальными клиентами</Typography>
                <Box component="p">
                  Курс составлен на 85% практики, что предполагает интенсивные практические занятия с двумя реальными
                  компаниями. На уроках вас ждут презентации, таблицы, тесты, готовые шаблоны, домашние задания и
                  бонусные видео-уроки.
                </Box>
              </Stack>
            </Box>
            <Box>
              <Typography variant="h2">03</Typography>
              <Stack>
                <Typography variant="h3">*Созвон с Айнур один на один</Typography>
                <Box component="p">
                  При сдачи экзамена на отлично, вы получите личную консультацию от Айнур. В ходе этой консультации вы
                  сможете разработать план для успешного начала собственной деятельности и открытия собственной
                  бухгалтерской компании.
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h2">04</Typography>
              <Stack>
                <Typography variant="h3">Легкодоступные уроки</Typography>
                <Box component="p">
                  На практических уроках уроки будут до 15 минут по каждой операции отдельно, чтобы быстрее и легче
                  усваивалась информация.
                </Box>
              </Stack>
            </Box>
            <Box>
              <Typography variant="h2">05</Typography>
              <Stack>
                <Typography variant="h3">Закрытое клуб буккиперов</Typography>
                <Box component="p">
                  Закрытое сообщество в телеграм канале и на Facebook будет доступно каждому ученику.
                </Box>
              </Stack>
            </Box>
            <Box>
              <Typography variant="h2">06</Typography>
              <Stack>
                <Typography variant="h3">*Пошаговый план как найти первую работу или клиента</Typography>
                <Box component="p">
                  В Бонусном модуле предоставлены все необходимые шаги, которые помогут вам успешно найти первую работу
                  или клиента.
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ pt: 4, pb: '3px' }}>
          <Typography sx={{ color: '#fff', textAlign: 'center' }}>*Доступно на тарифе Стандарт</Typography>
        </Box>
      </Box>
    </Container>
  );
}
