import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { undClick } from '../actions';
import ThinkButton from '../components/think-button';

class Think extends React.Component {
  render() {
    let label;
    // change to if (this.props.counterEn) {
    if (this.props.undInt > 0) {
      label = `Understanding: ${this.props.undInt} Clicks: ${this.props.clicks}`;
    } else {
      label = '\u200D'; // invisible char
    }

    return (
      <div>
        <ThinkButton label={label} onClick={() => this.props.undClick()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    undInt: state.stats.undInt,
    clicks: state.stats.clicks,
  }
);

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({ undClick }, dispatch)
);

export default connect(mapStateToProps, matchDispatchToProps)(Think);
