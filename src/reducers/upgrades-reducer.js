
import upgradesList from '../data/upgrades';

import upgradeReducer from './upgrade-reducer';

const upgradesReducer = (state = upgradesList, action) => {
  let newState;

  switch (action.type) {
    case 'UPGRADE_BUY':
      // falls through
    case 'UPGRADE_ACTIVATE':
      newState = state.map((upg) => {
        if (upg.id !== action.upg.id) {
          return upg;
        }
        return upgradeReducer(upg, action);
      });

      break;

    default:
      break;
  }
  return newState;
};

export default upgradesReducer;
