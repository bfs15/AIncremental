
const undInc = (qnt = 1) => {
	return {
		type: 'UND_INC',
		payload: qnt
	}
}

export default undInc;
