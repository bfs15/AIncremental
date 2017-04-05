import React from 'react';

const ThinkButton = ({ label, onClick }) => {
  return (
    <div>
      <span>{label}</span>
      <div>
        <button onClick={onClick}>
          Think
        </button>
      </div>
    </div>
  );
};

export default ThinkButton;
