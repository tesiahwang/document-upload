import React from 'react';
import Icon from '@mdi/react';
import { mdiClockTimeEightOutline } from '@mdi/js';
import './Client.css';
import Radio from '../Radio/Radio';
import Dropdown from '../Dropdown/Dropdown';

const Client = () => {
  return (
    <div>
      <p className='bold'>Client:</p>
      <div className='radio-container'>
        <Radio name='client' label1='Single' label2='Multiple' />
      </div>
      {[1, 2, 3, 4].map((center) => (
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
      ))}
    </div>
  );
};

export default Client;
