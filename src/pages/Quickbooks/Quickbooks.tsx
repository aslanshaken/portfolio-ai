import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickBooks = () => {
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
        <h2 style={{ textAlign: 'center' }}>Персонализированные тренинги и консультации по QuickBooks</h2>
        <p>Сложно работать с QuickBooks? Не знаете, как правильно классифицировать транзакции? Запишитесь ко мне на тренинг или консультацию для персонализированных рекомендаций, адаптированных под нужды вашего бизнеса.</p>
        <p>С моим большим опытом работы с различными предприятиями я досконально освоила все тонкости QuickBooks и финансовых стратегий.</p>
        
        <h3>Основные моменты:</h3>
        <ul>
          <li><strong>Классификация транзакций в QuickBooks:</strong> Независимо от того, новичок вы или уже используете QuickBooks, мы упростим настройку. Я покажу вам все через совместный просмотр экрана, чтобы все транзакции были правильно классифицированы.</li>
          <li><strong>Отчеты в QuickBooks:</strong> Научитесь создавать и настраивать важные финансовые отчеты в QuickBooks, такие как Profit & Loss, Balance Sheet и Statement of Cash Flow. Узнайте, как интерпретировать эти отчеты для стратегического принятия решений, выявления тенденций и возможностей для роста и повышения эффективности бизнеса.</li>
          <li><strong>Проверка финансового здоровья:</strong> Совместно со мной проведем подробный анализ ваших финансов, выявим сильные стороны и найдем способы сократить расходы, чтобы улучшить как ваш бизнес, так и предпринимательские навыки.</li>
        </ul>
        
        <h3>Мои квалификации:</h3>
        <ul>
          <li>Консультант QuickBooks Pro</li>
          <li>Я являюсь не только бухгалтером, но и предпринимателем, что означает, что я понимаю проблемы предпринимателей и говорю с ними на одном языке.</li>
          <li>Мои клиенты с Forbes, Inc 5000.</li>
        </ul>

        <h4>Стоимость: $100/час</h4>
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

export default QuickBooks;
