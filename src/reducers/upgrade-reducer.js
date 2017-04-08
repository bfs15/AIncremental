
const upgradeReducer = (upgrade, action) => {
  switch (action.type) {
    case 'UPGRADE_BUY':
      upgrade = {
        ...upgrade,
        owned: true,
      };
      // falls through
    case 'UPGRADE_ACTIVATE':
      upgrade = {
        ...upgrade,
        active: true,
      };

      break;
  }

  return upgrade;
};

export default upgradeReducer;
