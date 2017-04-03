
const upgradeReducer = (state, action) => {
	var upg = state;

	switch (action.type) {
		case 'UPGRADE_BUY':
			upg = {
				...upg,
				owned: true
			};
			// continue to UPGRADE_ACTIVATE
		case 'UPGRADE_ACTIVATE':
			upg = {
				...upg,
				active: true
			};

			break;
	}

	return upg;
}

export default upgradeReducer;
