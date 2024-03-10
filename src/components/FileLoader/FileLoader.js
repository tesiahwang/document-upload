import React from 'react';
import Icon from '@mdi/react';
import { mdiFileImage } from '@mdi/js';
import './FileLoader.css';

const FileLoader = () => {
  return (
    <div className='upload-status'>
      <Icon path={mdiFileImage} size={1} color='orange' />
    </div>
  );
};

export default FileLoader;
