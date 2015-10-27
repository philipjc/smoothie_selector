import './styles/_app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main.jsx';
import UserStore from './stores/UserStore.js';
import Account from './components/Account/Account.jsx';

// TODO perform local storage checks. Job of Module?
UserStore.listen(setUserDetails);
var chest = require('store-chest/src/store-chest');
chest.get();

// Initiate App with a user check.
checkUser();

/**
*
*/
function checkUser() {
  // Add initial DOM Elements and tags.
  setUpPage();
  let user = window.localStorage;
  let temp = window.sessionStorage;

  if (user.smoothieProfileName && user.smoothieAccess && user.smoothieAccess === temp.tempSmoothieAccess) {
    const userName = user.smoothieProfileName;
    // Enter App with User name
    enter(userName);

  } else if (user.smoothieProfileName && user.smoothieAccess && !user.tempSmoothieAccess) {
    // Go to Login Page
    login();

  } else {
    // Go to Create Page
    create();
  }
}

/**
*
*/
function setUpPage() {
  const app = document.createElement('div');
  app.id = 'appBody';
  const FA_CDN = "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
  const UBUNTU_FONT = "https://fonts.googleapis.com/css?family=Ubuntu";
  const ITALIANA_FONT = "https://fonts.googleapis.com/css?family=Italiana";

  const FA_LINK = document.createElement('link');
  const UBUNTU_LINK = document.createElement('link');

  FA_LINK.rel = "stylesheet";
  FA_LINK.type = "text/css";
  FA_LINK.href = FA_CDN;

  UBUNTU_LINK.rel = "stylesheet";
  UBUNTU_LINK.type = "text/css";
  UBUNTU_LINK.href = UBUNTU_FONT;

  document.body.appendChild(app);
  document.head.appendChild(FA_LINK);
  document.head.appendChild(UBUNTU_LINK);
}

/**
*
*/
function setUserDetails(user) {
  chest.set('smoothieProfileName', user.name);
  chest.set('smoothieAccess', user.pw);
  window.sessionStorage.setItem('tempSmoothieAccess', user.pw);

  checkUser();
}

/**
*
*/
function logout() {
  window.sessionStorage.removeItem('tempSmoothieAccess');
  checkUser();
}

/**
*
*/
function enter(name) {
  const app = document.getElementById('appBody');
  let intro = `Welcome to Smoothie Selector, ${name}. What Do you fancy?`;
  ReactDOM.render(<Main title={intro} user={name} logout={logout} />, app);
}

/**
*
*/
function login() {
  const app = document.getElementById('appBody');
  ReactDOM.render(<Account flag="login" />, app);
}

/**
*
*/
function create() {
  const app = document.getElementById('appBody');
  ReactDOM.render(<Account flag="create" />, app);
}
