import React from 'react';
import Icon from '@mdi/react';
import { mdiFileDocument } from '@mdi/js';
import './Upload.css';

const Upload = () => {
  return (
    <div className='upload-container'>
      <div id='dragNdrop'>
        <Icon path={mdiFileDocument} size={1} color='orange' />
        <span>
          Drag & Drop Here Or <strong>Browse</strong>
        </span>
      </div>

      <button id='upload-manifest' className='submit-button continue bold'>
        Upload Manifest
      </button>
    </div>
  );
};

export default Upload;
