import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/router';
import { GlobalContextProvider } from './context/GlobalContext'; // 复用原全局状态
// import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <AppRouter />
    </GlobalContextProvider>
  </React.StrictMode>
);