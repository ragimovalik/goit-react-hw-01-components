import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize';
import './index.css';
// import FirstComponent from './components/FirstComponent';
import './components/Profile';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <FirstComponent /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(template, document.getElementById("root"));
