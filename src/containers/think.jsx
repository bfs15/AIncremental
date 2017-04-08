import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { thinkClick, intelligenceCommit } from '../actions';

class Think extends React.Component {
	information() {
		let commitCounter = '\u200D';
		let intelligenceCounter = '\u200D';

		if (this.props.upgrades[2].active) {
			commitCounter = `Commited: ${this.props.intelligenceCommited}`;
		}

		if (this.props.upgrades[0].active) {
			intelligenceCounter = `Understanding: ${this.props.intelligenceRounded}`;
		}

		return (
			<div>
				{intelligenceCounter}
				<div>
					{commitCounter}
				</div>
			</div>
		);
	}

	commitButton() {
		if (this.props.upgrades[2].active) {
			return (
				<Button
					onClick={() =>
						this.props.intelligenceCommit(this.props.intelligenceRounded)
					}
				>
					Commit
				</Button>
			);
		}

		return null;
	}

	render() {
		return (
			<div>
				<h2>{this.information()}</h2>
				<div>
					<Button
						onClick={() => this.props.thinkClick()}
					>
						Think
					</Button>
					{this.commitButton()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => (
	{
		intelligenceRounded: state.stats.intelligenceRounded,
		intelligenceTotal: state.stats.intelligenceTotal,
		intelligenceCommited: state.stats.intelligenceCommited,
		clicksTotal: state.stats.clicksTotal,
		upgrades: state.upgrades,
	}
);

const matchDispatchToProps = (dispatch) => (
	bindActionCreators({ thinkClick, intelligenceCommit }, dispatch)
);

export default connect(mapStateToProps, matchDispatchToProps)(Think);
