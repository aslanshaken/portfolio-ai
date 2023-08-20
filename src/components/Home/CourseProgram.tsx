import * as React from 'react';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box, Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    background: 'transparent',
    color: '#fff',
    borderBottom: '1px solid #686868',
    '&:last-child': {
      borderBottom: 'none',
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
      maxWidth: '100%',
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
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  '& .MuiTypography-root': {
    fontSize: '16px',
    maxWidth: '100%',
    paddingBottom: '16px',
    '@media (max-width: 1199px)': {
      fontSize: '14px',
    },
  },
  '& .MuiList-root': {
    '& .MuiListItem-root': {
      padding: '8px 0',
    },
  },
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const accordionData = [
    {
      id: '1',
      content: (
        <List>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>1. Старт</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Профессиональный буккипер 21 века</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Мультик: кто такой буккипер?</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>2. Что такое буккипинг</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Введение</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Assets, Liabilities, Equity - Активы, обязательства, капитал</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Accounting Equation - Уравнение бухгалтерского учета</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Accounting Equation - Уравнение бухгалтерского учета ПРИМЕР</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Accounts, Debit & Credits - Счета, дебет и кредит</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Шпаргалка по дебетам и кредитам</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Ledger, Chart of Accounts and Trial Balance - Главная книга, план счетов и пробный баланс
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Демонстрация Ledger, Chart of Accounts and Trial Balance - Бухгалтерской книги, план счетов и пробного
                баланса
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Accounting Principles - Принципы Бухгалтерского Учета</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>3. Финансовые репорты</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Введение</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Profit and Loss - Счет доходов и расходов</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Balance Sheet - Репорт активов и пасивов</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Statement of Cash Flow - Отчет о движении денежных средств</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Как финансовые отчетности связаны друг с другом</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Bookkeeping Cycle - Бухгалтерский Цикл</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Method of Payments and Receipts - Методы оплаты</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Bases of Accounting - Виды введения бухгалтерского учета</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>4. Этикеты и законы</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Профессиональная этика буккипера</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Виды предпринимательств</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Составление контракта: основные элементы</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Как получать оплату</ListItem>
            </List>
          </ListItem>
        </List>
      ),
    },
    {
      id: '2',
      content: (
        <List>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>
                1. Ознакомление с платформой Quickbooks online и с клиентом
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Ознакомление с платформой Quickbooks</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Регистрация на платформе Quickbooks</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Знакомство с клиентом</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Quickbooks аккаунт клиента VS Quickbooks аккаунт буккипера</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Настройка параметров компании</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Настройка Chart of Accounts</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Настройка Sales Tax - Налог с продаж</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Record Opening Balances - Учет остатков на начало периода</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Review Trial balance & Close Periods - Проверить пробный баланс и закрыть период
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Checklist & Wrapup - Контрольный список и подведение итогов</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>
                2. Денежные поступления и дебиторская задолженность
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Введение</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Products and Services - Товары и услуги</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Клиента</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Sales Receipts - чеков о продажах</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Invoices - счетов</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Receive Payments - Получение платежей</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Credit Memo and Refund - Кредитовое авизо и Возврат</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Overview Lesson - Обзорный урок/проверка отчетов</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>
                3. Денежные выплаты и кредиторская задолженность
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Введение</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Обзор Accounts Payable and Expenses - кредиторская задолжность и расходов
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Vendors - поставщиков</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Bills - счетов</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Создание Expenses and Billable Expenses - Расходы и Оплачиваемые Расходы
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Сhecks and Bill Payment - Чеки и Оплаты счетов</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Создание Vendor Credit and Invoice for Unbilled Expenses - Кредит Поставщика и Счет за неоплаченные
                расходы
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Overview Lesson - Обзорный урок/проверка отчетов</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>4. Инвентарь</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Обзор инвентаря</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Продукта для Инвентаря</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Распределение стоимости продукта и Покупка инвентаря</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Корректировка количества запасов</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Обзорный урок/проверка отчетов</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>5. Активы</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Обзор Fixed Asset</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Fixed Assets - Активов</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Depreciation of Assets - Амортизация Актива</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Disposing of Assets - избавление от актива</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Overview Lesson - Обзорный урок/проверка отчетов</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>6. Задолженность по кредитам банка</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Обзор Notes Payable</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Создание Notes Payable - задолжность по кредитам банка</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Создание Note Payments - оплаты по задолжностям по кредитам банка
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Создание Adjusting Entries and Overview Lesson- Корректирующие записи и Обзорный урок/проверка отчетов
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>7. Прочие пассивы</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Обзор Other Liability</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Обьяснения что такое Payroll Liability - обязательство по заработной плате
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Обзор на Sales Tax - налог с продаж</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Запись Payroll Liability</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Запись Sales Tax and Overview Lesson - Налог с продаж и Обзорный урок/проверка отчетов
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>8. Прочие активы</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Prepaid Expenses - предоплачиваемые затраты</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Record Prepaid Expense in Sample Company</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>9. Капитал</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Обзор Equity</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Owner Contribution - Взносы Владельца</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Owner Distribution PART 1 - Выведение денег Владельца</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Owner Distribution PART 2 and Overview Lesson - Выведение денег Владельца и Обзорный урок/проверка
                отчетов
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>10. Банковский счет и выверка</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Bank Feed Overview Part 1</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Bank Feed Overview Part 2</ListItem>
              <ListItem sx={{ color: 'gray' }}>
                - Uploading & Working with Bank Feed - Загрузка и работа с банковским отделом
              </ListItem>
              <ListItem sx={{ color: 'gray' }}>- Bank Reconciliation - банковская выверка</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Overview Lesson - Обзорный урок/проверка отчетов</ListItem>
            </List>
          </ListItem>
        </List>
      ),
    },
    {
      id: '3',
      content: (
        <>
          <List>
            <ListItem>
              <List>
                <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>Виды проектов:</ListItem>
                <ListItem sx={{ color: 'gray' }}>Catch Up - догнать</ListItem>
                <ListItem sx={{ color: 'gray' }}>Clean up - чистка Balance Sheet</ListItem>
                <ListItem sx={{ color: 'gray' }}>Clean up - чистка Profit and Loss</ListItem>
                <ListItem sx={{ color: 'gray' }}>Базовый Финансовый Анализ</ListItem>
              </List>
            </ListItem>
          </List>
          <Divider sx={{ borderColor: '#5C5C5C', my: 3 }} />
          <Box>
            <List>
              <ListItem>
                <List>
                  <Typography
                    variant="h3"
                    sx={{
                      background: 'linear-gradient(56deg, #F9CF3D 3%, #FF9B40 21%, #FF9B3F 65%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: '30px !important',
                      fontWeight: '400',
                    }}
                  >
                    FINAL EXAM
                  </Typography>
                  <ListItem sx={{ color: 'gray' }}>- Введение</ListItem>
                  <ListItem sx={{ color: 'gray' }}>- Настройка клиента</ListItem>
                  <ListItem sx={{ color: 'gray' }}>- Настройка инвентаря и остатков</ListItem>
                  <ListItem sx={{ color: 'gray' }}>- Дебиторская и кредиторская задолженность</ListItem>
                  <ListItem sx={{ color: 'gray' }}>
                    - Собственный капитал, заработная плата и корректирующие проводки
                  </ListItem>
                  <ListItem sx={{ color: 'gray' }}>- Сверка и отчеты</ListItem>
                </List>
              </ListItem>
            </List>
          </Box>
        </>
      ),
    },
    {
      id: '4',
      content: (
        <>
          <Box>
            <List>
              <ListItem>
                <List>
                  <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>Уроки от HR:</ListItem>
                  <ListItem sx={{ color: 'gray' }}>- Личный бренд Специалиста.</ListItem>
                  <ListItem sx={{ color: 'gray' }}>- Продаваемое резюме.</ListItem>
                  <ListItem sx={{ color: 'gray' }}>- LinkedIn как возможность заявить о себе!</ListItem>
                  <ListItem sx={{ color: 'gray' }}>- Facebook как возможность заявить о себе!</ListItem>
                  <ListItem sx={{ color: 'gray' }}>- Как найти работу без нервов?</ListItem>
                </List>
              </ListItem>
            </List>
             <List>
              <ListItem>
                <List>
              <ListItem sx={{ fontWeight: '400', fontSize:'medium' }}>Как найти первого клиента</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Маркетинг: где находить клиентов</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Как заинтересовать клиента</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Обзор на Checklists</ListItem>
              <ListItem sx={{ color: 'gray' }}>- Стимуляция: от первой встречи до заключения договора</ListItem>
              <Divider sx={{ borderColor: '#5C5C5C', my: 3 }} />
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>Эфиры с профессиональным буккипером с 20 летним стажем</ListItem>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>Эфиры как выйти на платформу Upwork</ListItem>
              <ListItem sx={{ fontWeight: '400', fontSize: 'medium' }}>Дополнительные эфиры с приглашенными спикерами</ListItem>
              
             </List>
              </ListItem>
                </List>
          </Box>
        </>
      ),
    },
  ];

  return (
    <Box id="program" sx={{ pt: 5 }}>
      <Container>
        <Typography variant="h2" mb={6}>
          <Box component="span" className="TextGradientPrimary">
            Программа
          </Box>{' '}
          курса
        </Typography>

        <Box
          sx={{
            background: '#3B3C3B',
            boxShadow: '0px 4px 80px 0px rgba(0, 0, 0, 0.30)',
            borderRadius: '10px',
            px: { xs: 2, md: 3, lg: 4, xl: 5 },
          }}
        >
          <Box>
            {accordionData.map((item) => (
              <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                <AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
                  {item.id === '4'
                   ?
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(56deg, #F9CF3D 3%, #FF9B40 21%, #FF9B3F 65%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '18px', lg: '25px', xl: '30px', xxl: '35px' },
                      }}
                    >
                    Бонусная Модуль
                    </Box>
                   : 
                    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    ЧАСТЬ
                    <Box
                      component="span"
                      color="#41635C"
                      sx={{ px: 1, fontSize: { xs: '28px', lg: '36px', xl: '40px', xxl: '48px' } }}
                    >
                      {item.id}
                    </Box>
                  </Typography>
                  }
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
