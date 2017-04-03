
export
const undClick = (value = 1) => {
	return {
		type: 'UND_CLICK',
		value
	}
}

export
const undInc = (value = 1) => {
	return {
		type: 'UND_INC',
		value
	}
}

export
const upgBuy = (upg) => {
	return {
		type: 'UPGRADE_BUY',
		upg
	}
}

export
const upgActivate = (upg) => {
	return {
		type: 'UPGRADE_ACTIVATE',
		upg
	}
}
