import React from 'react';
import Icon from '@mdi/react';
import { mdiFileDocument } from '@mdi/js';

const Upload = () => {
  return (
    <div className='upload-container'>
      <div id='dragNdrop'>
        <Icon path={mdiFileDocument} size={1} color='#fa9c27' />
        <span>
          Drag & Drop Here Or <strong>Browse</strong>
        </span>
      </div>

      <button id='upload' className='submit-button continue bold'>
        Upload Manifest
      </button>
    </div>
  );
};

export default Upload;
