import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home/Home'
import GlobalStyles from './assets/style/Global.style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);