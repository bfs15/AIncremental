import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { upgBuy } from '../actions';
import UpgradeItem from '../components/upgrade-item';

const getVisibleUpgrades = (upgrades, value) => (
  upgrades.filter((upg) => (
    !upg.owned && value >= upg.cost
  ))
);

class upgradesList extends React.Component {
  render() {
    const upgradeItems =
    getVisibleUpgrades(this.props.upgrades, 1.25 * this.props.und)
    .map((upg) => {
      let enabled = false;
      if (this.props.und >= upg.cost) {
        enabled = true;
      }

      return (
        <UpgradeItem
          key={upg.id}
          upg={upg}
          enabled={enabled}
          onClick={() => this.props.upgBuy(upg)}
        />
      );
    });

    return (
      <div>
        {upgradeItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    und: state.stats.und,
    upgrades: state.upgrades,
  }
);

// TODO
upgradesList.propTypes = {
  // und: React.PropTypes..isRequired,
  // upgrades: React.PropTypes..isRequired,
};

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({ upgBuy }, dispatch)
);

export default connect(mapStateToProps, matchDispatchToProps)(upgradesList);
