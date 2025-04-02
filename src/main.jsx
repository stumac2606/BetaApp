import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import 'antd/dist/reset.css'; // for Ant Design v5+
import './index.css';

// ✅ Log to confirm .env is working
console.log("ENV API URL:", import.meta.env.VITE_API_BASE_URL);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
