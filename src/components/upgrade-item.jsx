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

UpgradeItem.propTypes = {
  enabled: React.PropTypes.boolean.isRequired,
  onClick: React.PropTypes.function.isRequired,
};

export default UpgradeItem;
