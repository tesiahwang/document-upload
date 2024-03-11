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
        <input type='checkbox' checked={isToggled} onChange={handleChange} />
        <span className='slider round'></span>
      </label>
      <p className='toggle'>{isToggled ? 'Toggle ON' : 'Toggle OFF'}</p>
      <div className='tolerance'>
        <Icon path={mdiClockTimeEightOutline} className='clock' size={1} />
        <p>Select Tolerance Level</p>
      </div>
    </div>
  );
};

export default Toggle;
