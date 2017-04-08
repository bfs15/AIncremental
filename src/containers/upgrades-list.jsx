import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Panel } from 'react-bootstrap';

import { upgBuy } from '../actions';
import UpgradeItem from '../components/upgrade-item';

const visibleUpgrades = (upgrades, threshold) => (
  // returns upgrades if you could buy them with 'threshold' && they are not owned
  upgrades.filter((upg) => (
    upg.cost <= threshold && !upg.owned
  ))
);

const title = () => (
  null
  // <h2>Upgrades</h2> // show on labeling upgrade
);

class upgradesList extends React.Component {
  upgradeItems() {
    // TODO: change 1.25 to a value increased by a "foresight" upgrade
    return visibleUpgrades(this.props.upgrades, 1.25 * this.props.intelligence)
      .map((upg, i) => (
        <UpgradeItem
          key={upg.id}
          upg={upg}
          enabled={this.props.intelligence >= upg.cost}
          showCost={this.props.upgrades[1].active}
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

const mapStateToProps = (state) => (
  {
    intelligence: state.stats.intelligence,
    upgrades: state.upgrades,
  }
);

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({ upgBuy }, dispatch)
);

export default connect(mapStateToProps, matchDispatchToProps)(upgradesList);
