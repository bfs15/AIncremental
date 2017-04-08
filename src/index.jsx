import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/root-reducer';
import App from './components/app';
import { intelligenceInc } from './actions';

require('./style.css');

const store = createStore(
	rootReducer,
);

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

// somewhere when you app starts
setInterval(() => {
	const state = store.getState();

	// let actions = calculatePendingActions(store.getState());
	// actions.forEach(store.dispatch);

	store.dispatch(
		intelligenceInc(freq * (state.stats.intelligenceCommited / 100)));
}, freqMs);

// function calculatePendingActions(state) {
//   const { timer } = state;
//   const actions = [];
//   // put all your conditions here...
//   if (timer.started && (new Date()).getTime() - timer.startedOn > 60 * 1000) {
//     actions.push(stop());
//   }
//   // etc...
//   return actions;
// }
