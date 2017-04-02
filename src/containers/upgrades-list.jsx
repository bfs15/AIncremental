import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {buyUpg} from '../actions';
import UpgradeItem from '../components/upgrade-item';

const getVisibleUpgrades = (upgrades, value) => {
	return upgrades.filter( (upg) => {
		return !upg.owned && value >= upg.cost;
	});
}

class upgradesList extends React.Component {
	render() {
		const upgradeItems =
		getVisibleUpgrades(this.props.upgrades, 1.25*this.props.und)
		.map((upg) => {
			var enabled = false;
			if (this.props.und >= upg.cost) {
				enabled = true;
			}

			return (
				<UpgradeItem key={upg.id} upg={upg} enabled={enabled} onClick={ () => this.props.buyUpg(upg) }/>
			);
		});

		return (
			<div>
				{upgradeItems}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		und: state.stats,
		upgrades: state.upgrades
	};
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({buyUpg: buyUpg}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(upgradesList);
