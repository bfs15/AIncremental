import React from 'react';

import Think from '../containers/think';
import UpgradesList from '../containers/upgrades-list';

export default
class App extends React.Component {
	render () {
		return (
				<div>
					<Think />
					<UpgradesList />
				</div>
		);
	}
}
