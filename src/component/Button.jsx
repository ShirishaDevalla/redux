import React from 'react';

const Button = ({ btnName, onClick }) => {
  return (
    <React.Fragment>
      <button type='button' onClick={onClick}>
        {btnName}
      </button>
    </React.Fragment>
  );
};

export default Button;
