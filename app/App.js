import './styles/_app.scss';
// import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';

main();

function main() {
  const app = document.createElement('div');
  const FA_CDN = "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
  const UBUNTU_FONT = "https://fonts.googleapis.com/css?family=Ubuntu";

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

  ReactDOM.render(<Main />, app);
}
