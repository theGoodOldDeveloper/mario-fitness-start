import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css'; */
/* import App from './App'; */
import Hello from './Hello';
import Login from './components/login'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Hello udv={'Köszöntölek a Márió Fitnessben'} />
    <Login />
  </div>
);