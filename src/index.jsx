import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

require("./style.css");

import combinedReducers from './combine-reducers'
import App from './components/app';

const store = createStore(
	combinedReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
