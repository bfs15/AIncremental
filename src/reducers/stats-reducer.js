
const statsReducer = (state =  0, action) => {
	switch (action.type) {
		case 'UND_INC':
			return state + action.payload;
			break;

		default:
			return state;
	}
}

export default statsReducer;
