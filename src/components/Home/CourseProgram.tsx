import * as React from 'react';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box, Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "transparent",
  color: "#fff",
  borderBottom: "1px solid #686868",
  '&:last-child': {
    borderBottom: 'none', // Remove the border from the last child
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary sx={{ p: 0, border: "0px !important" }}
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: {xs:"28px", sm:"32px" , lg:"36px"}, color: "#41635C" }} />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    '& .MuiTypography-root': {
      fontSize: "25px",
      maxWidth: "60%",
      '@media (max-width: 1440px)': {
        fontSize: "23px",
      },
      '@media (max-width: 1199px)': {
        fontSize: "21px",
      },
      '@media (max-width: 768px)': {
        fontSize: "16px",
        maxWidth: "100%",
      }
    }
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  '& .MuiTypography-root': {
    fontSize: "16px",
    maxWidth: "100%",
    paddingBottom: "16px",
    '@media (max-width: 1199px)': {
      fontSize: "14px",
    },
  },
  '& .MuiList-root': {
    '& .MuiListItem-root': {
      padding: "8px 0",
    }
  }
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const accordionData = [
    {
      id: 'panel1',
      question: 'ЧАСТЬ',
      number: "1",
      content: (
        <List>
          <ListItem>1. Старт</ListItem>
          <ListItem>2. Что такое буккипинг</ListItem>
          <ListItem>3. Финансовые репорты </ListItem>
          <ListItem>4. Этикеты и законы</ListItem>
        </List>
      ),
    },
    {
      id: 'panel2',
      question: 'ЧАСТЬ',
      number: "2",
      content: (
        <List>
          <ListItem>1. Ознакомление с платформой Quickbooks online и с клиентом</ListItem>
          <ListItem>2. Денежные поступления и дебиторская задолженность</ListItem>
          <ListItem>3. Денежные выплаты и кредиторская задолженность</ListItem>
          <ListItem>4. Инвентарь Активы</ListItem>
          <ListItem>6. Задолженность по кредитам банка</ListItem>
          <ListItem>7. Прочие пассивы</ListItem>
          <ListItem>8. Прочие активы</ListItem>
          <ListItem>9. Капитал</ListItem>
          <ListItem>10. Банковский счет и выверка</ListItem>
        </List>
      ),
    },
    {
      id: 'panel3',
      question: 'ЧАСТЬ',
      number: "3",
      content: (
        <>
        <List>
          <ListItem> Виды проектов</ListItem>
        </List>
        <Box>
        <Typography variant='h3' sx={{
          background: 'linear-gradient(56deg, #F9CF3D 3%, #FF9B40 21%, #FF9B3F 65%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', fontSize: "30px !important", fontWeight: "600", my: 3,
        }}>FINAL EXAM</Typography>
        <Divider sx={{ borderColor: "#5C5C5C", my: 3 }} />
        <Divider sx={{ borderColor: "#5C5C5C", my: 3 }} />
        <Typography variant="h4">БОНУСНЫЙ МОДУЛЬ</Typography>
        <List>
          <ListItem>1. Уроки от HR</ListItem>
          <ListItem>2. Мой первый клиент</ListItem>
        </List>
      </Box>
      </>
      ),
    },


  ];
  return (
    <Box sx={{pt:2}}>
      <Container>
      <Typography variant="h2" mb={6}>Программа курса</Typography>
        <Box sx={{ background: "#3B3C3B", boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.30)", borderRadius: "10px", px:{ xs:2, md:3, lg:4, xl:5} }}>
          <Box>
            {accordionData.map((item) => (
              <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                <AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>{item.question}<Box component="span" color="#41635C" sx={{ px: 1, fontSize: { xs: "28px", lg:"36px", xl: "40px", xxl: "48px" } }}>{item.number}</Box></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}