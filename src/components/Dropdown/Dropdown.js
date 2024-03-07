import React from 'react';
import './Dropdown.css';
import Drop from 'react-dropdown';

const Dropdown = ({ placeholder }) => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <Drop
      options={options}
      placeholder={placeholder}
      className='dropdown'
      arrowClassName='arrow'
    />
  );
};

export default Dropdown;
