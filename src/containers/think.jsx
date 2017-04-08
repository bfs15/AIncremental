import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { undClick } from '../actions';
import ThinkButton from '../components/think-button';

class Think extends React.Component {
  getLabel() {
    let label;
    if (this.props.upgs[0].active) {
      label = `Understanding: ${this.props.undInt} Clicks: ${this.props.clicks}`;
    } else {
      label = '\u200D'; // invisible char
    }

    return label;
  }

  render() {
    return (
      <ThinkButton
        label={this.getLabel()}
        onClick={() => this.props.undClick()}
      />
    );
  }
}

// TODO
/* eslint react/prop-types: 0 */
Think.propTypes = {
  // undInt: React.PropTypes..isRequired,
  // clicks: React.PropTypes..isRequired,
};

const mapStateToProps = (state) => (
  {
    undInt: state.stats.undInt,
    clicks: state.stats.clicks,
    upgs: state.upgrades,
  }
);

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({ undClick }, dispatch)
);

export default connect(mapStateToProps, matchDispatchToProps)(Think);
