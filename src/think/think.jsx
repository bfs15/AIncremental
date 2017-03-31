import React from 'react';

export default class Think extends React.Component {
	constructor(props) {
		super(props);
		this.state = {understandingN : 0};
		this.onThink = this.onThink.bind(this);
	}

	onThink () {
		let newUnderstandingN = this.state.understandingN + 1;
		this.setState({understandingN: newUnderstandingN});
	}

	render() {
		var label = <span>&zwnj;</span>;

		if (this.state.understandingN > 0) {
			label = <span>Understanding: {this.state.understandingN}</span>;
		}

		return (
			<div>
				{label}
				<div>
					<button onClick={this.onThink}>
						Think
					</button>
				</div>
			</div>
		);
	}
}
