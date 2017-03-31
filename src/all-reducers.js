
import {combineReducers} from 'redux';
import UpgradesReducer from './upgrades/upgrades-reducer.js';

export const allReducers = combineReducers ({
	upgrades: UpgradesReducer
});
