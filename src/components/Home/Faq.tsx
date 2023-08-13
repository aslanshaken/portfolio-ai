import * as React from 'react';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {Typography, Box , Container}  from '@mui/material';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    background:"transparent",
    color:"#fff",
    borderBottom:"1px solid #686868",
    '&:last-child': {
        borderBottom: 'none', // Remove the border from the last child
      },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary sx={{p:0, border:"0px !important"}}
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: {xs:"28px", sm:"32px" , lg:"36px"}, color:"#41635C"  }} />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    '& .MuiTypography-root' : {
        fontSize:"25px",
        maxWidth:"60%",
        fontWeight:"600",
        '@media (max-width: 1600px)': {
          fontSize:"23px",
      },
      '@media (max-width: 1440px)': {
        fontSize:"20px",
    },
      '@media (max-width: 1199px)': {
        fontSize:"18px",
    },
      '@media (max-width: 768px)': {
          fontSize:"15px",
          maxWidth:"100%",
      }
    }
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  '& .MuiTypography-root' : {
    fontSize:"16px",
    maxWidth:"60%",
    paddingBottom:"16px",
    '@media (max-width: 1440px)': {
      fontSize:"15px",
  },
    '@media (max-width: 1199px)': {
        fontSize:"14px",
        maxWidth:"100%",
    },
    '@media (max-width: 768px)': {
      fontSize:"13px",
      maxWidth:"100%",
  },
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
          question: 'Английский обязательно знать?',
          answer:
            'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
        },
        {
          id: 'panel2',
          question: 'Что делать, если я работаю полный рабочий день или являюсь домохозяйкой и у меня есть дети?',
          answer:
            'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
        },
        {
            id: 'panel3',
            question: 'В чем разница этих курсов от других?',
            answer:
              'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
          },
          {
            id: 'panel4',
            question: 'Когда я начну зарабатывать?',
            answer:
              'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
          },
          {
            id: 'panel5',
            question: 'Мне страшно, потому что я ничего не знаю о бухгалтерии. Я не знаю с чего начать и боюсь что не получиться.',
            answer:
              'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
          },
          {
            id: 'panel6',
            question: 'Нужен ли мне сертификат чтобы начать свою карьеру в Буккипинге?',
            answer:
              'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
          },
          {
            id: 'panel7',
            question: 'Я боюсь что не справлюсь самостоятельно с обучением. Если у меня возникнут вопросы про курс, у кого спрашивать?',
            answer:
              'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
          },
          {
            id: 'panel8',
            question: '«Звучит здорово! Я обязательно у вас обучусь, но не сейчас. Мне надо еще закрыть некоторые дела. Потом я к вам присоединюсь.»',
            answer:
              'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
          },
          {
            id: 'panel9',
            question: 'Кому не подходит обучение буккипера?',
            answer:
              'Знание английского языка на базовом уровне обязательно для ориентирования на платформе. Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Дополнительные возможности для поиска работы/клиентов будут доступны на тарифах Стандарт и ВИП.',
          },
      ];
  return (
<Box sx={{pt:2}}>
      <Container>
      <Typography variant="h2" mb={6}>ЧАСТО ЗАДАВАЕМЫЕ <Box component="span" className="TextGradientPrimary">ВОПРОСЫ</Box></Typography>
        <Box sx={{ pt: 4 }}>
          {accordionData.map((item) => (
            <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
              <AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}