import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

require("./style.css");

import {allReducers} from './all-reducers.js'

import App from './app/app.jsx';


const store = createStore(allReducers);

render(<App/>, document.getElementById('root'));
