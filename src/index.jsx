import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

require("./style.css");

import combinedReducers from './combine-reducers.js'

import App from './components/app.jsx';

render(
	<Provider store={createStore(combinedReducers)}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
