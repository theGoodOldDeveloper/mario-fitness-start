/* *****************************************************************************
   *** haggggyadmaa a port aatirogatasat 3000-en mert a build nem muxik !!! ****
   ***************************************************************************** */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './components/Hello';
import Login from './components/Login'
const vmi = require('./init')
console.log('-----retur vmi-----', vmi.default)
console.log('******ezt vizsgald!!! ******', localStorage.getItem('token'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Hello udv={'Köszöntölek a Márió Fitnessben'} />
    <Login />
  </div>
);

console.log('ezeddig OK!')