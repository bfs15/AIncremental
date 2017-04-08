import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Panel } from 'react-bootstrap';

import { upgBuy } from '../actions';
import UpgradeItem from '../components/upgrade-item';

const getVisibleUpgrades = (upgrades, value) => (
  upgrades.filter((upg) => (
    !upg.owned && value >= upg.cost
  ))
);

const title = () => (
  <h2>Upgrades</h2>
);

class upgradesList extends React.Component {
  upgradeItems() {
    return getVisibleUpgrades(this.props.upgrades, 1.25 * this.props.und)
      .map((upg) => (
        <UpgradeItem
          key={upg.id}
          upg={upg}
          enabled={this.props.und >= upg.cost}
          onClick={() => this.props.upgBuy(upg)}
        />
      ));
  }

  render() {
    return (
      <div>
        <Panel header={title()}>
          {this.upgradeItems()}
        </Panel>
      </div>
    );
  }
}

// TODO
/* eslint react/prop-types: 0 */
upgradesList.propTypes = {
  // und: React.PropTypes..isRequired,
  // upgrades: React.PropTypes..isRequired,
};

const mapStateToProps = (state) => (
  {
    und: state.stats.und,
    upgrades: state.upgrades,
  }
);

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({ upgBuy }, dispatch)
);

export default connect(mapStateToProps, matchDispatchToProps)(upgradesList);
