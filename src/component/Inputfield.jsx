import React from 'react';

const Inputfield = ({ inputType, name, value, placeholder, onChange }) => {
  return (
    <React.Fragment>
      <input 
        type={inputType} 
        name={name} 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange}  
      />
    </React.Fragment>
  );
};

export default Inputfield;
