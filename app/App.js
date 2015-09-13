import './styles/_app.scss';
// import 'font-awesome/css/font-awesome.css';


import React from 'react';
import Main from './components/Main.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<Main />, app);
}
