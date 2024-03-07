import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiClockTimeEightOutline } from '@mdi/js';
import './Toggle.css';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='toggle-container'>
      <label className='switch'>
        <input type='checkbox' onChange={handleChange} checked={isToggled} />
        <span className='slider round'></span>
      </label>
      <p className='toggle'>Toggle {isToggled ? 'ON' : 'OFF'}</p>
      <Icon path={mdiClockTimeEightOutline} className='clock' />
      <p>Select Tolerance Level</p>
    </div>
  );
};

export default Toggle;