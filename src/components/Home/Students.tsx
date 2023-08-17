import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Container, Grid, Box, Typography } from '@mui/material';
import Asel from '../../assets/images/slider-img.png';
import Ulan from '../../assets/images/ulan.png';
import Madina from '../../assets/images/madina.png';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

interface Item {
  name: string;
  description: string;
  subDescription: string;
  image: string;
}

const Students: React.FC = () => {
  const items: Item[] = [
    {
      name: 'Асель Ныгметжанова',
      description: 'Ничего не знала про бухгалтерию, не было работы.',
      subDescription:
        'Работает буккипером с Марта 2022 года из Казахстана. По меркам Казахстана зарабатывает в 2 раза больше чем бТратит 10-13 часов в неделю. Так как работа буккипера не занимает много времени имела возможность устроится на вторую работу. Асель ни в чем себе не отказывает и пробует себя в разных сферах.',
      image: Asel,
    },
    {
      name: 'Улан Досов',
      description:
        'Учится с утра до вечера в университете Нархоз. Очень хотел иметь свой заработок для достижения финансовой незавизимости и самостоятельности.',
      subDescription:
        'Работает буккипером с Марта 2023 года.Получил свой первый проект Catch Up за $500. После окончания проекта Улан будет вести ежемесячный буккипинг этого же клиента с двумя компаниями. Работа буккипера позволяет Улану совмещать работу и учебу, а так же будучи студентом брать все свои расходы на себя. Планирует самостоятельно оплатить за свое обучение в университете.',
      image: Ulan,
    },
    {
      name: 'Мадина Талгабекова',
      description: 'В декрете, заработок 0',
      subDescription:
        'Работает онлайн буккипером с Марта 2023 года. Зарплата $10.5/час, выходит в месяц $441. Тратит на работу 1-2 часа в день. Поскольку у Мадины еще есть свободное время, хочет найти еще больше клиентов. ',
      image: Madina,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} py={10}>
        <Grid item xs={12}>
          <Typography variant="h4" mb={5}>
            <Box component="span" className="TextGradientPrimary">
              МОИ СТУДЕНТЫ
            </Box>{' '}
            КОТОРЫЕ УЖЕ ЗАРАБАТЫВАЮТ НА БУККИПИНГЕ
          </Typography>
          <Box
            sx={{
              borderRadius: '20px',
              backgroundColor: '#3B3B3B',
              boxShadow: '0px 4px 80px 0px rgba(0, 0, 0, 0.30)',
              padding: '50px',
              position: 'relative',
            }}
          >
            <Carousel
              animation="slide"
              sx={{
                maxWidth: 886,
                margin: 'auto',
                position: 'static',
              }}
              navButtonsAlwaysVisible
              NextIcon={<ArrowCircleRightIcon />}
              PrevIcon={<ArrowCircleLeftIcon />}
            >
              {items.map((item, i) => (
                <ItemComponent key={i} item={item} />
              ))}
            </Carousel>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

interface ItemComponentProps {
  item: Item;
}

const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => {
  return (
    <Paper
      sx={{
        backgroundColor: 'transparent',
        color: 'white',
        boxShadow: 'none',
      }}
    >
      <Grid container spacing={5} alignItems="center">
        <Grid item md={4}>
          <Box
            component="img"
            sx={{
              maxWidth: '100%',
              display: 'block',
              margin: 'auto',
            }}
            src={item.image}
            alt={item.name}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h2">{item.name}</Typography>
          <Typography variant="h6" color="gray" marginTop="10px">
            Работает из Казахстана
          </Typography>
          <p>
            <Box
              component="span"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              Точка
            </Box>{' '}
            <Box
              component="span"
              className="TextGradientPrimary"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              А:
            </Box>{' '}
            {item.description}
          </p>
          <p>
            <Box
              component="span"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              Точка
            </Box>{' '}
            <Box
              component="span"
              className="TextGradientPrimary"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              Б:
            </Box>{' '}
            {item.subDescription}
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Students;
