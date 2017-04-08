import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/root-reducer';
import App from './components/app';
import { intelligenceInc } from './actions';

require('./style.css');

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

const ms = 1000;

// loops per second
const gameRate = 20;

// interval between a loop and the next in ms
const freqMs = ms / gameRate; // something short
// is seconds
const freq = 1 / gameRate;

// temporaty intelligence per second
const intelligenceRate = 1;

// somewhere when you app starts
setInterval(() => {
  const state = store.getState();

  // let actions = calculate_pending_actions(store.getState());
  // actions.forEach(store.dispatch);

  store.dispatch(intelligenceInc(intelligenceRate * freq));
}, freqMs);

function calculate_pending_actions(state) {
  const { timer } = state;
  const actions = [];
  // put all your conditions here...
  if (timer.started && (new Date()).getTime() - timer.startedOn > 60 * 1000) {
    actions.push(stop());
  }
  // etc...
  return actions;
}
