import * as React from 'react';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box, Container } from '@mui/material';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    background: 'transparent',
    color: '#fff',
    borderBottom: '1px solid #686868',
    '&:last-child': {
      borderBottom: 'none', // Remove the border from the last child
    },
  }),
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    sx={{ p: 0, border: '0px !important' }}
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: { xs: '28px', sm: '32px', lg: '36px' }, color: '#41635C' }} />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    '& .MuiTypography-root': {
      fontSize: '25px',
      maxWidth: '60%',
      fontWeight: '600',
      '@media (max-width: 1600px)': {
        fontSize: '23px',
      },
      '@media (max-width: 1440px)': {
        fontSize: '20px',
      },
      '@media (max-width: 1199px)': {
        fontSize: '18px',
      },
      '@media (max-width: 768px)': {
        fontSize: '15px',
        maxWidth: '100%',
      },
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  '& .MuiTypography-root': {
    fontSize: '16px',
    maxWidth: '60%',
    paddingBottom: '16px',
    '@media (max-width: 1440px)': {
      fontSize: '15px',
    },
    '@media (max-width: 1199px)': {
      fontSize: '14px',
      maxWidth: '100%',
    },
    '@media (max-width: 768px)': {
      fontSize: '13px',
      maxWidth: '100%',
    },
  },
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange = (id: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? id : false);
  };
  const accordionData = [
    {
      id: '1',
      question: 'Английский обязательно знать?',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
    {
      id: '2',
      question: 'Что делать, если я работаю полный рабочий день или являюсь домохозяйкой и у меня есть дети?',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
    {
      id: '3',
      question: 'В чем разница этих курсов от других?',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
    {
      id: '4',
      question: 'Когда я начну зарабатывать?',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
    {
      id: '5',
      question:
        'Мне страшно, потому что я ничего не знаю о бухгалтерии. Я не знаю с чего начать и боюсь что не получиться.',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
    {
      id: '6',
      question: 'Нужен ли мне сертификат чтобы начать свою карьеру в Буккипинге?',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
    {
      id: '7',
      question:
        'Я боюсь что не справлюсь самостоятельно с обучением. Если у меня возникнут вопросы про курс, у кого спрашивать?',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
    {
      id: '8',
      question:
        '«Звучит здорово! Я обязательно у вас обучусь, но не сейчас. Мне надо еще закрыть некоторые дела. Потом я к вам присоединюсь.»',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
    {
      id: '9',
      question: 'Кому не подходит обучение буккипера?',
      answer: 'ПИШИ СЮДА ЧТО ХОЧЕШЬ',
    },
  ];
  return (
    <Box sx={{ pt: 2 }}>
      <Container>
        <Typography variant="h2" mb={6}>
          ЧАСТО ЗАДАВАЕМЫЕ{' '}
          <Box component="span" className="TextGradientPrimary">
            ВОПРОСЫ
          </Box>
        </Typography>
        <Box>
          {accordionData.map((item) => (
            <Accordion
              sx={{ padding: '20px 0px' }}
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
                <Typography variant="body1">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="gray">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
