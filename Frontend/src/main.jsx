import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/argon-dashboard.css';
import './assets/css/argon-dashboard.css.map';
import './assets/css/argon-dashboard.min.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
