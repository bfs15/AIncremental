import React from 'react';
import { Button, Tooltip, OverlayTrigger, Glyphicon } from 'react-bootstrap';

const UpgradeItem = ({ upg, enabled, onClick, showCost }) => {
	let cost = null;

	if (showCost) {
		cost = `: ${upg.cost}`;
	}

	const upgradeTooltip = (
		<Tooltip id="tooltip">
			<h4><strong>{upg.name}</strong>{cost}</h4>
			<div>
				{upg.description}
			</div>
		</Tooltip>
	);

	return (
		<OverlayTrigger placement="top" overlay={upgradeTooltip}>
			<Button disabled={!enabled} onClick={onClick}>
				<Glyphicon glyph={`glyphicon glyphicon-${upg.icon}`} />
			</Button>
		</OverlayTrigger>
	);
};

export default UpgradeItem;
