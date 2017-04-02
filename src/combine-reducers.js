import {combineReducers} from 'redux';

// import reducers
import statsReducer from './reducers/stats-reducer.js';
import upgradesReducer from './reducers/upgrades-reducer.js';

const combinedReducers = combineReducers ({
	stats: statsReducer,
	upgrades: upgradesReducer
});

export default combinedReducers;
