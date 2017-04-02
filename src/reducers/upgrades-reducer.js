
import upgradesList from '../data/upgrades';

import upgradeReducer from './upgrade-reducer';

const upgradesReducer = (state = upgradesList, action) => {
	switch (action.type) {
		case 'BUY_UPGRADE':
			return state.map( upg => upgradeReducer(upg, action) )
	}
	return state;
}

export default upgradesReducer;
