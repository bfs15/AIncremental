import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

require("./style.css");

import combinedReducers from './combine-reducers'
import App from './components/app';
import {undInc} from './actions';

const store = createStore(
	combinedReducers
);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

let ms = 1000;

// loops per second
let gameRate = 20;

// interval between a loop and the next in ms
let freqMs = ms/gameRate;
// is seconds
let freq = 1/gameRate;

// temporaty und per second
var undRate = 1;

//somewhere when you app starts
setInterval(()=> {
  var state = store.getState();

  // let actions = calculate_pending_actions(store.getState());
  // actions.forEach(store.dispatch);

  store.dispatch(undInc(undRate*freq));

}, freqMs); // something short

function calculate_pending_actions (state) {
  let { timer } = state;
  let actions = [];
  // put all your conditions here...
  if (timer.started && (new Date()).getTime() - timer.startedOn > 60*1000) {
    actions.push(stop());
  }
  // etc...
  return actions;
}
