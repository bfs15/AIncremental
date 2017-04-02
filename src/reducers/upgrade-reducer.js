
const upgradeReducer = (state, action) => {
	switch (action.type) {
		case 'BUY_UPGRADE':
			if (state.id !== action.upg.id) {
				return state;
			}
			return {
				owned: true,
				active: true,
				...state
			};
	}
	return state;
}

export default upgradeReducer;
