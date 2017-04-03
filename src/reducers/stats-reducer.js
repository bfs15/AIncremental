
const statsReducer = (state = { und: 0, clicks: 0 }, action) => {
	var newStats = state;

	switch (action.type) {
		case 'UND_CLICK':
			newStats = {
				...newStats,
				clicks: state.clicks + 1
			}
			// continue to UND_INC
		case 'UND_INC':
			var newUnd = state.und + action.value;

			newStats = {
				...newStats,
				und: newUnd,
				undInt: Math.round(newUnd)
			}

			break;

		case 'UPGRADE_BUY':
			var newUnd = state.und - action.upg.cost;

			newStats = {
				...newStats,
				und: newUnd,
				undInt: Math.round(newUnd)
			}

			break;
	}

	return newStats;
}

export default statsReducer;
