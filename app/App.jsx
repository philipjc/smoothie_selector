import './styles/_app.scss';

import React from 'react';
import Main from './components/Main.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<Main />, app);
}
