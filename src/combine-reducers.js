import {combineReducers} from 'redux';

// import reducers
import statsReducer from './reducers/stats-reducer';
import upgradesReducer from './reducers/upgrades-reducer';

const combinedReducers = combineReducers ({
	stats: statsReducer,
	upgrades: upgradesReducer
});

export default combinedReducers;
