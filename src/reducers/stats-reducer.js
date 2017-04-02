
const statsReducer = (state =  0, action) => {
	switch (action.type) {
		case 'UND_INC':
			return state + action.value;

		case 'BUY_UPGRADE':
			return state - action.upg.cost;
	}
	return state;
}

export default statsReducer;
