import { AppThemeProvider } from './themes/AppThemeProvider';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import React from 'react';
import App from './App';
import './main.css';
import Header from './layouts/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import Footer from './layouts/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <Header />
        <App />
        <Footer />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
);
