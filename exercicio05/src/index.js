import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/app.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// After
// import { createRoot } from 'react-dom/client';
// import App from './App';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App/>);