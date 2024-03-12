import React from 'react';
import './Radio.css';

const Radio = ({ name, label1, label2, onChange = () => {} }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='radio-container'>
      <div className='radio-option'>
        <input
          id={label1}
          name={name}
          type='radio'
          value={label1}
          onChange={handleChange}
        />
        <label htmlFor={label1}>{label1}</label>
      </div>
      <div className='radio-option'>
        <input
          id={label2}
          name={name}
          type='radio'
          value={label2}
          onChange={handleChange}
        />
        <label htmlFor={label2}>{label2}</label>
      </div>
    </div>
  );
};

export default Radio;
