import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Radio from '../Radio/Radio';
import Upload from '../Upload/Upload';
import Toggle from '../Toggle/Toggle';
import Icon from '@mdi/react';
import { mdiClockTimeEightOutline } from '@mdi/js';
import './Modal.css';

const Modal = () => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='close-button'>&times;</button>
        <h1 id='title'>Document Upload</h1>
        <div className='container'>
          <div id='column1'>
            <div id='import' className='section'>
              <Dropdown placeholder='Select Import Name:' />
            </div>
            <div>
              <p className='bold'>
                Select a manifest that you'd like to import
              </p>
              <Upload />
            </div>
            <div className='section'>
              <p className='bold'>Elapse Data Checking:</p>
              <p className='dynamic'>No Elapsed Dates!</p>
            </div>
            <div className='section'>
              <p className='bold'>Tolerance Window:</p>
              <Toggle />
            </div>
          </div>

          <div id='column2'>
            <div className='section'>
              <p className='bold'>Split schedule using social distancing?</p>
              <div className='radio-container'>
                <Radio name='social-distancing' label1='Yes' label2='No' />
              </div>
            </div>
            <div className='section'>
              <p className='bold'>Location Checking:</p>
              <p className='dynamic'>All Available!</p>
            </div>
            <div className='section'>
              <p className='bold'>Client:</p>
              <div className='radio-container'>
                <Radio name='client' label1='Single' label2='Multiple' />
              </div>
              <p className='testing'>
                Testing Center 1 <Dropdown placeholder='Select Client' />
                <Icon path={mdiClockTimeEightOutline} className='clock' />
              </p>
              <p className='testing'>
                Testing Center 2 <Dropdown placeholder='Select Client' />
                <Icon path={mdiClockTimeEightOutline} className='clock' />
              </p>
              <p className='testing'>
                Testing Center 3 <Dropdown placeholder='Select Client' />
                <Icon path={mdiClockTimeEightOutline} className='clock' />
              </p>
              <p className='testing'>
                Testing Center 4 <Dropdown placeholder='Select Client' />
                <Icon path={mdiClockTimeEightOutline} className='clock' />
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className='bold import-confirmation'>
            Data in the import file is correct. Please press Continue to import.
          </p>
          <button className='bold submit-button continue'>
            Continue import
          </button>
          <button id='cancel' className='bold submit-button'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
