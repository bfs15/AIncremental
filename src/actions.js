export
const undInc = (value = 1) => {
	return {
		type: 'UND_INC',
		value
	}
}

export
const buyUpg = (upg) => {
	return {
		type: 'BUY_UPGRADE',
		upg
	}
}
