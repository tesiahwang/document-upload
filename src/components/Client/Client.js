import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiClockTimeEightOutline } from '@mdi/js';
import Dropdown from '../Dropdown/Dropdown';
import Radio from '../Radio/Radio';
import './Client.css';

const Client = () => {
  const [singleClient, setSingleClient] = useState(false);

  const handleRadioChange = (value) => {
    setSingleClient(value === 'Single');
  };

  const renderClientInfo = (center) => (
    <div key={center} className='client-info'>
      <span className='testing-title'>Testing Center {center}</span>
      <div className='client-dropdown'>
        <Dropdown
          placeholder='Select Client'
          options={['Google', 'LinkedIn', 'Microsoft']}
        />
      </div>
      <Icon path={mdiClockTimeEightOutline} className='clock' size={1} />
    </div>
  );

  const renderClients = () => {
    if (singleClient) {
      return renderClientInfo(1);
    } else {
      return [1, 2, 3, 4].map((center) => renderClientInfo(center));
    }
  };

  return (
    <div className='client-container'>
      <p className='client-header'>Client:</p>
      <div className='radio-container'>
        <Radio
          name='client'
          label1='Single'
          label2='Multiple'
          onChange={handleRadioChange}
        />
      </div>
      {renderClients()}
    </div>
  );
};

export default Client;
