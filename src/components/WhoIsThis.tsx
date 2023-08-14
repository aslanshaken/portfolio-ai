
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid, useMediaQuery  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SchoolIcon from '@mui/icons-material/School';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function WhoIsThis() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const listContent = [
      [
        {
          title: 'Новичкам',
          secondary: 'Для тех, кто хочет освоить новую профессию, при этом с возможностью выбора работать на компанию или на себя, оффлайн или онлайн. На курсе вы получите пошаговый план с нуля до получения первого дохода.',
          icon:  <RocketLaunchIcon />
        },
        {
          title: 'Фрилансерам, которые хотят иметь дополнительный доход',
          secondary: 'Для тех, кто хочет получать стабильный доход и работать с постоянными клиентами из разных стран.',
          icon:  <RequestQuoteIcon />
        },
        {
          title: 'Студентам, которые хотят быть финансово независимы',
          secondary: 'Для тех, кто хочет быть финансово независимы от своих родителей, возможность поработать с иностранными компаниями, до окончания учебы в университете уже иметь опыт в сфере финансов.',
          icon:  <SchoolIcon />
        },
      ],
      [
        {
          title: 'Мамам в декрете, которые хотят развиваться и иметь личные деньги',
          secondary: 'Для тех, кто хочет иметь свои личные деньги, без вреда для семьи. Воплощать свои «хотелки» и уделять время детям и мужу.',
          icon:  <PregnantWomanIcon />
        },
        {
          title: 'Бухгалтерам, которые хотят работать меньше, а зарабатывать больше',
          secondary: 'Бухгалтеры, которые устали задерживаться на работе и хотят работать онлайн, при этом получая в разы больше.',
          icon:  <CalculateIcon />
        },
        {
          title: 'Наемным работникам, которые хотят увеличить свой ежемесячный доход',
          secondary: 'Для тех, кто хочет плавно перейти в онлайн и дополнительно зарабатывать на международной профессии. ',
          icon:  <AccountBalanceIcon />
        },
      ],
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingBottom:'50px', paddingTop: '30px' }}>
      <Typography variant="h2" mb={3}>
        <span className="TextGradientPrimary">ДЛЯ КОГО</span> ЭТО ОБУЧЕНИЕ?
      </Typography>
      <Grid container spacing={2}>
        {listContent.map((side, number) => (
          <Grid item xs={12} sm={isMobile ? 12 : 6} key={number}>
            <List sx={{ display: 'flex', flexDirection: 'column', overflowX: 'auto', gap: '5px' }}>
              {side.map((item, index) => (
                <ListItem alignItems="flex-start" key={index}>
                  <ListItemAvatar>
                    <Box
                      component="span"
                      sx={{
                        width: 66,
                        height: 66,
                        borderRadius: '100px',
                        background: '#242524',
                        boxShadow: '-3px -2px 11px 0px rgba(109, 109, 109, 0.20), 2px 2px 12px 0px rgba(0, 0, 0, 0.34)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 3,
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
                        {item.icon}
                      </Box>
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ paddingTop: '14px'}}
                    primary={item.title}
                    secondary={
                      <Typography sx={{ display: 'inline', fontSize: '1.1rem' }} component="span">
                        {item.secondary}
                      </Typography>
                    }
                    primaryTypographyProps={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      marginBottom: '1.25rem',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
