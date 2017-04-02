import React from 'react';

const UpgradeItem = ({ upg, enabled, onClick }) => {
	var disabled = 'true';
	if (enabled) {
		disabled = null;
	}

	return (
		<div>
			<div>
				<button disabled={disabled} onClick={onClick}>
					{upg.name} {upg.cost}
				</button>
			</div>
			<span>{upg.description}</span>
		</div>
	);
}

export default UpgradeItem;
