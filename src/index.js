/* *****************************************************************************
   *** haggggyadmaa a port aatirogatasat 3000-en mert a build nem muxik !!! ****
   ***************************************************************************** */
//import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './components/Hello';
import Login from './components/Login'
import Userslist from './components/Userslist'
//import App from "./components/App";
import { models } from './models'
//const vmi = require('./init')
//const users = require('./users')

/* console.log('-----retur vmi-----', vmi.default)
console.log('******ezt vizsgald!!! ******', localStorage.getItem('token'))
console.log('****** USERS!!! ******', users.def)
console.log('****** models!!! ******', models) */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Hello udv={models[0].emil} name={models[0].username} />
    <Login />
    <Userslist />
  </div>
);

console.log('ezeddig OK!')

//INFO:TODO:INFO: BAD
/* getdata()
var users = ['**']
async function getdata() {
  var response = await fetch(`http://localhost:5002/users`);
  users = await response.json();
  console.log('users********************************************', users)
} */