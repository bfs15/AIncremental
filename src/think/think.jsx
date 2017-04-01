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
		var label;

		// change to if (this.props.counterEn) {
		if (this.state.understandingN > 0) {
			label = "Understanding: " + this.state.understandingN;
		} else {
			label = '\u200D'; // invisible char
		}

		return (
			<div>
				<span>{label}</span>
				<div>
					<button onClick={this.onThink}>
						Think
					</button>
				</div>
			</div>
		);
	}
}
