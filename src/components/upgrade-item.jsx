import React from 'react';
import { Button, Tooltip, OverlayTrigger, Glyphicon } from 'react-bootstrap';

const UpgradeItem = ({ upg, enabled, onClick }) => {
  let disabled = true;
  if (enabled) {
    disabled = false;
  }

  const tooltip = (
    <Tooltip id="tooltip">
      <strong>{upg.name}</strong>{`: ${upg.cost}`}
      <div>
        {upg.description}
      </div>
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="top" overlay={tooltip}>
      <Button disabled={disabled} onClick={onClick}>
        <Glyphicon glyph={`glyphicon glyphicon-${upg.icon}`} />
      </Button>
    </OverlayTrigger>
  );
};

// TODO
/* eslint react/prop-types: 0 */
// UpgradeItem.propTypes = {
//   // upg: React.PropTypes..isRequired,
//   enabled: React.PropTypes.bool.isRequired,
//   onClick: React.PropTypes.func.isRequired,
// };

export default UpgradeItem;
