import React from 'react';
import './Radio.css';

const Radio = ({ name, label1, label2 }) => {
  return (
    <div className='radio-container'>
      <div className='radio-option'>
        <input type='radio' id={label1} name={name} value={label1} />
        <label htmlFor={label1}>{label1}</label>
      </div>
      <div className='radio-option'>
        <input type='radio' id={label2} name={name} value={label2} />
        <label htmlFor={label2}>{label2}</label>
      </div>
    </div>
  );
};

export default Radio;
