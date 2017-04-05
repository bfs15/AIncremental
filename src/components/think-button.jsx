import React from 'react';

const ThinkButton = ({ label, onClick }) => (
  <div>
    <span>{label}</span>
    <div>
      <button onClick={onClick}>
        Think
      </button>
    </div>
  </div>
);

// TODO
ThinkButton.propTypes = {
  // label: React.PropTypes..isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default ThinkButton;
