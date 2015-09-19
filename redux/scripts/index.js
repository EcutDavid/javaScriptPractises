import App from './container/App.js'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import todoApp from './reducer';
import { createStore } from 'redux';

let store = createStore(todoApp);
React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
   document.querySelector('#app'));
