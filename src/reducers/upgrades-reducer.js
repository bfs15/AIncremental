
import upgradesList from '../data/upgrades';

import upgradeReducer from './upgrade-reducer';

const upgradesReducer = (state = upgradesList, action) => {
	switch (action.type) {
		case 'UPGRADE_BUY':
		case 'UPGRADE_ACTIVATE':
			return state.map( (upg) => {
				if (upg.id !== action.upg.id) {
					return upg;
				}
				return upgradeReducer(upg, action)
			});
	}
	return state;
}

export default upgradesReducer;
