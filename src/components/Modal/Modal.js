import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Radio from '../Radio/Radio';
import Upload from '../Upload/Upload';
import Toggle from '../Toggle/Toggle';
import Client from '../Client/Client';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import './Modal.css';

const Modal = ({ onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [importTextVisible, setImportTextVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleModalClick = (e) => {
    const modalContent = document.querySelector('.modal');
    if (!modalContent.contains(e.target)) {
      onClose();
    }
  };

  const handleImportTextVisibility = (isVisible) => {
    setImportTextVisible(isVisible);
  };

  const renderDividerForMobile = () => {
    if (isMobile) {
      return <div className='divider' />;
    }
  };

  return (
    <div className='modal-overlay' onClick={handleModalClick}>
      <div className='modal'>
        <div className='close-button'>
          <button onClick={onClose}>
            <Icon path={mdiClose} size={1} color='white' />
          </button>
        </div>
        <h1>Document Upload</h1>

        <div className='container'>
          <div id='column1'>
            <Dropdown
              id='import-button'
              placeholder='Select Import Name'
              options={['Option 1', 'Option 2', 'Option 3']}
              bold
            />

            <div className='divider' />

            <div>
              <p className='bold'>
                Select a manifest that you'd like to import
              </p>
              <Upload onImportTextVisibleChange={handleImportTextVisibility} />
            </div>

            <div className='divider' />

            <div className='no-gaps'>
              <p className='bold'>Elapse Data Checking:</p>
              <p className='dynamic'>No Elapsed Dates!</p>
            </div>

            <div className='divider' />

            <div className='no-gaps'>
              <p className='bold'>Tolerance Window:</p>
              <Toggle />
            </div>
          </div>

          <div id='column2'>
            {renderDividerForMobile()}
            <div>
              <p className='bold'>Split schedule using social distancing?</p>
              <div className='radio-container'>
                <Radio name='social-distancing' label1='Yes' label2='No' />
              </div>
            </div>

            <div className='divider' />

            <div className='no-gaps'>
              <p className='bold'>Location Checking:</p>
              <p className='dynamic'>All Available!</p>
            </div>

            <div className='divider' />

            <div>
              <Client />
            </div>
          </div>
        </div>

        <div>
          {importTextVisible && (
            <div className='bold import-text'>
              <p>Data in the import file is correct.</p>
              <p>Please press Continue to import.</p>
            </div>
          )}
          <button className='bold submit-button continue'>
            Continue Import
          </button>
          <button id='cancel' className='bold submit-button' onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
