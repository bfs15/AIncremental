import React from 'react';

const UpgradeItem = ({ upg, enabled, onClick }) => {
  let disabled = 'true';
  if (enabled) {
    disabled = null;
  }

  return (
    <div>
      <div>
        <button disabled={disabled} onClick={onClick}>
          {upg.name} {upg.cost}
        </button>
      </div>
      <span>{upg.description}</span>
    </div>
  );
};

// TODO
// UpgradeItem.propTypes = {
//   // upg: React.PropTypes..isRequired,
//   enabled: React.PropTypes.bool.isRequired,
//   onClick: React.PropTypes.func.isRequired,
// };

export default UpgradeItem;
