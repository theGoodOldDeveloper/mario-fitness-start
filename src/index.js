import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
/*  Fontawesome icons */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
/* Bootsrtap 5.1 */
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

/* import './style.css' */

//import Hello from './components/Hello';
//import Login from './components/Login'

//import Loginregister from './components/Loginregister'
//import Userslist from './components/Userslist'
//import { models } from './models'
//const vmi = require('./init')
//const users = require('./users')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

console.log('ezeddig OK!')

//INFO - bad
/*
 getdata()
var users = ['**']
async function getdata() {
  var response = await fetch(`http://localhost:5002/users`);
  users = await response.json();
  console.log('users********************************************', users)
} 
*/

/*
 console.log('-----retur vmi-----', vmi.default)
console.log('******ezt vizsgald!!! ******', localStorage.getItem('token'))
console.log('****** USERS!!! ******', users.def)
console.log('****** models!!! ******', models) 
*/