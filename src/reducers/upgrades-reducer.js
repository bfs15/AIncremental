
import upgradesList from '../data/upgrades';

import upgradeReducer from './upgrade-reducer';

const upgradesReducer = (upgrades = upgradesList, action) => {
  switch (action.type) {
    case 'UPGRADE_BUY':
      // falls through
    case 'UPGRADE_ACTIVATE':
      upgrades = upgrades.map((upg) => {
        if (upg.id !== action.upg.id) {
          return upg;
        }
        return upgradeReducer(upg, action);
      });

      break;

    default:
  }
  return upgrades;
};

export default upgradesReducer;
