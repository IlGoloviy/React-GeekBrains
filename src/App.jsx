import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './layout/Layout';
import store from './store';

import './style.css';

ReactDOM.render(
  <>
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>
  </>, 
  document.querySelector('#root')
)