
const upgradeReducer = (state, action) => {
  let upg = state;

  switch (action.type) {
    case 'UPGRADE_BUY':
      upg = {
        ...upg,
        owned: true,
      };
      // falls through to UPGRADE_ACTIVATE
    case 'UPGRADE_ACTIVATE':
      upg = {
        ...upg,
        active: true,
      };

      break;
    default:
  }

  return upg;
};

export default upgradeReducer;
