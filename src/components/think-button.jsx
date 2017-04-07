import React from 'react';
import { Button } from 'react-bootstrap';

const ThinkButton = ({ label, onClick }) => (
  <div>
    <h2>{label}</h2>
    <div>
      <Button onClick={onClick}>
        Think
      </Button>
    </div>
  </div>
);

// TODO
ThinkButton.propTypes = {
  // label: React.PropTypes..isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default ThinkButton;
