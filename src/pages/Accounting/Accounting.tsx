import React from 'react';
import { useNavigate } from 'react-router-dom';

const Accounting = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={containerStyle}>
      <button 
        onClick={() => navigate('/')} 
        style={backButtonStyle}
      >
        <h3>Back</h3>
      </button>
      <div className="content" style={contentStyle}>
        <h2 style={{ textAlign: 'center' }}>Зачем заказывать у меня бесплатный 15-минутный звонок?</h2>
        <p><strong>1. Индивидуальные решения:</strong> Каждый бизнес уникален, и мы это понимаем. Во время нашего звонка мы обсудим ваши конкретные потребности и проблемы, чтобы предложить индивидуальные решения, которые идеально подойдут вашему бизнесу.</p>
        <p><strong>2. Экспертное руководство:</strong> С многолетним опытом в области бухгалтерского учета и финансов, я могу предложить конкретные советы и рекомендации, соответствующие вашей ситуации. Независимо от того, с какими трудностями вы сталкиваетесь, у меня есть знания и навыки, чтобы помочь вам найти правильное решение.</p>
        <p><strong>3. Экономия времени и денег:</strong> Передавая нам бухгалтерские задачи, вы высвободите свое драгоценное время для развития бизнеса. Наши эффективные процессы также помогут вам сэкономить деньги в долгосрочной перспективе.</p>
        <p><strong>4. Душевное спокойствие:</strong> Попрощайтесь со стрессом, связанным с управлением финансами в одиночку. Сотрудничая со мной, вы можете быть уверены, что ваши цифры в надежных руках, что позволит вам быть спокойным и уверенным в своих финансовых результатах.</p>
        <p><strong>5. Доступные цены:</strong> Наши цены начинаются от $357 в месяц. Мы предлагаем прозрачные цены, при этом уделяя главное внимание высокому качеству наших услуг, чтобы удовлетворить потребности бизнеса любого размера.</p>
        
        <h2 style={{ textAlign: 'center' }}>Готовы сделать следующий шаг?</h2>
        <p>Не позволяйте финансовым проблемам удерживать вас от достижения ваших бизнес-целей. Закажите бесплатный 15-минутный звонок сегодня и узнайте, как мы можем помочь вам на пути к финансовому успеху. Просто заполните форму ниже и выберите удобное время встречи!</p>
      </div>
      <iframe
        src="https://calendly.com/go4profit-us/discoverycall?embed_domain=go4profit.us&amp;embed_type=Inline"
        width="100%"
        height="670px"
        frameBorder="0"
        title="Select a Date & Time - Calendly"
      ></iframe>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'left',
  padding: '20px',
  position: 'relative',
};

const contentStyle: React.CSSProperties = {
  maxWidth: '80%',
};

const backButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  background: 'none',
  border: 'none',
  color: '#5482FC',
  textDecoration: 'underline',
  cursor: 'pointer',
};

export default Accounting;
