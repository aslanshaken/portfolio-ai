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
      answer: "Необходимо иметь базовые навыки владения английским языком для успешной навигации на платформе.Вы можете начать поиск клиентов или работы среди русскоязычной аудитории, если вам сложно общаться на английском. Однако стоит отметить, что для долгосрочного развития английский язык становится неотъемлемой частью."
    },
    {
      id: '2',
      question: 'Что делать, если я работаю полный рабочий день или являюсь домохозяйкой и у меня есть дети?',
      answer: 'Курс разработан так, чтобы сделать его ЛЕГКИМ для людей, которые работают полный рабочий день или являются домохозяйками с детьми. Программа представляет собой самостоятельное и гибкое обучение, что означает, что нет необходимости посещать занятия каждый день. Вы можете учиться в удобное для вас время.',
    },
    {
      id: '3',
      question: 'В чем разница этих курсов от других?',
      answer: 'Наш курс состоит из 85% практики ведения бухгалтерии на двух реальных компаниях во время обучения, освоение основ бухгалтерии по международным стандартам, технические знания с нуля в QuickBooks. QuickBooks является одним из самых распространенных программных решений для бухгалтерии и финансового учета в мире. Множество компаний, особенно малых и средних предприятий, используют QuickBooks для управления своими финансами. Обучение в этой программе дает студентам ценные навыки, которые востребованы на рынке труда.  Кроме того, в зависимости от выбранного тарифа, вы сможете научиться работать на себя, создавая собственный бизнес.'
    },
    {
      id: '4',
      question: 'Когда я начну зарабатывать?',
      answer: 'Время начала заработка зависит от каждого конкретного студента, поэтому я не могу дать однозначного ответа.  Если одни студенты находили своего первого клиента или работу в течение месяца то другим понадобилось 6-7 месяцев. ',
    },
    {
      id: '5',
      question:
        'Мне страшно, потому что я ничего не знаю о бухгалтерии. Я не знаю с чего начать и боюсь что не получиться.',
      answer: 'Если у вас нет опыта, это абсолютно нормально. Мы обучаем программе с самого начала, даже если вы ничего не знаете о бухгалтерии или ведении бизнеса. Я знаю, каково начинать бизнес, ничего не понимая в этой области, и не хочу, чтобы вам пришлось повторять мои ошибки. Наш курс уникален, и его цель - превратить вас из "абсолютного новичка" в "успешного бухгалтера".',
    },
    {
      id: '6',
      question: 'Нужен ли мне сертификат чтобы начать свою карьеру в Буккипинге?',
      answer: 'Получение сертификации, конечно, не помешает, но это не поможет вам привлечь клиентов. По крайней мере, не так, как вы думаете. Большинство клиентов не будут интересоваться наличием сертификата. И, что может удивить, для работы в качестве бухгалтера не обязательно иметь какие-либо виды сертификации.Тем не менее, QuickBooks Online и Xero предлагают бесплатные сертификации, и мы рекомендуем вам получить их. Но они также не являются обязательными для работы в качестве бухгалтера.',
    },
    {
      id: '7',
      question:
        'Я боюсь что не справлюсь самостоятельно с обучением. Если у меня возникнут вопросы про курс, у кого спрашивать?',
      answer: 'Одно из моих гордых достижений - это наш невероятно поддерживающий учебный коллектив. Именно такой поддержки мне не хватало, когда я только начинала свой путь... и поэтому я решила включить ее в наш курс именно для вас. Если у вас возникают затруднения или у вас есть вопросы, просто зайдите в наш телеграм-канал, вы сможете публиковать сообщения в нашем закрытом сообществе, где находятся поддерживающие студенты, прошедшие через то же, что и вы, и готовые помочь и поддержать вас, а также ответить на ваши вопросы. Вы никогда не почувствуетесь одинокими! ',
    },
    {
      id: '8',
      question:
        '«Звучит здорово! Я обязательно у вас обучусь, но не сейчас. Мне надо еще закрыть некоторые дела. Потом я к вам присоединюсь.»',
      answer: 'Слушай, я буду с тобой откровенна. Я разговаривала с многими потенциальными буккиперами, которые рассматривали возможность присоединиться к нам. И любой, кто говорит: «Я собираюсь присоединиться сразу после того, как эта или другая вещь будет закончена…», никогда не делает этого. Правда в том, что НИКОГДА не будет идеального времени, чтобы начать свой самостоятельный путь в буккипинге. Когда мы откладываем эти дела на потом, это часто означает, что они просто никогда не будут выполнены. Разница в том, что когда мы расставляем приоритеты и принимаем действия сейчас, мы делаем важные дела важными и продвигаемся вперед. Даже если это всего лишь небольшое действие, это первые шаги, и они могут указать изменить нашу жизнь.',
    },
    {
      id: '9',
      question: 'Кому не подходит обучение буккипера?',
      answer: 'Наш курс буккипинга не подходит вам, если вы не можете слушать, учиться, делать заметки и ДЕЙСТВОВАТЬ. А так же если вы творческий и неусидчивый человек, этот курс и профессия может быть менее подходящим выбором для вас.',
    },
  ];
  return (
    <Box sx={{ pt: 15 }}>
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
              sx={{ padding: '10px 0px' }}
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
                <Typography variant="body1" sx={{ fontWeight: '400 !important' }}>{item.question}</Typography>
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
