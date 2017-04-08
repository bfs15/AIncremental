import { combineReducers } from 'redux';

// import reducers
import statsReducer from './stats-reducer';
import upgradesReducer from './upgrades-reducer';

const rootReducer = combineReducers({
	stats: statsReducer,
	upgrades: upgradesReducer,
});

export default rootReducer;
