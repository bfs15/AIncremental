import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {undInc} from '../actions';
import ThinkButton from '../components/think-button';

class Think extends React.Component {
	render() {
		var label;

		// change to if (this.props.counterEn) {
		if (this.props.und > 0) {
			label = "Understanding: " + this.props.und;
		} else {
			label = '\u200D'; // invisible char
		}

		return (
			<div>
				<ThinkButton label={label} onClick={ () => this.props.undInc() }/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		und: state.stats
	};
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({undInc: undInc}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Think);
