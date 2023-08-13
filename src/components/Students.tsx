import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Container, Grid, Box, Typography, Card } from '@mui/material';
import SlideImage from '../assets/images/slider-img.png';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

interface Item {
  name: string;
  description: string;
  descriptionTitle: string;
  descriptionAlbha: string;
  description2: string;
  description2Title: string;
  description2Alpha: string;
  image: string;
}

const Students: React.FC = () => {
  const items: Item[] = [
    {
      name: 'Асель Ныгметжанова',
      descriptionTitle: 'Точка',
      descriptionAlbha: 'А',
      description: 'Ничего не знала про бухгалтерию, не было работы.',
      description2Title: 'Точка',
      description2Alpha: 'Б',
      description2:
        'Точка Б: Работает буккипером с Марта 2022 года из Казахстана. По меркам Казахстана зарабатывает в 2 раза больше чем бТратит 10-13 часов в неделю. Так как работа буккипера не занимает много времени имела возможность устроится на вторую работу. Асель ни в чем себе не отказывает и пробует себя в разных сферах.',
      image: SlideImage,
    },
    {
      name: 'Улан Досов',
      descriptionTitle: 'Точка',
      descriptionAlbha: 'А',
      description: 'Ничего не знала про бухгалтерию, не было работы.',
      description2Title: 'Точка',
      description2Alpha: 'Б',
      description2:
        'Учится с утра до вечера в университете Нархоз. Очень хотел иметь свой заработок для достижения финансовой незавизимости и самостоятельности.',
      image: SlideImage,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} py={10}>
        <Grid item xs={12}>
          <Typography variant="h2" mb={5}>
          <Box component="span" className="TextGradientPrimary">МОИ СТУДЕНТЫ</Box> КОТОРЫЕ УЖЕ
            <Box component="br" />
            ЗАРАБАТЫВАЮТ НА БУККИПИНГЕ
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
        <Grid item md={3}>
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
          <p>
            <Box
              component="span"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              {item.descriptionTitle}
            </Box>{' '}
            <Box
              component="span"
              className="TextGradientPrimary"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              {item.descriptionAlbha}
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
              {item.description2Title}
            </Box>{' '}
            <Box
              component="span"
              className="TextGradientPrimary"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              {item.description2Alpha}
            </Box>{' '}
            {item.description2}
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Students;
