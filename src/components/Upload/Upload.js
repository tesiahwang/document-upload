import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiFileDocument, mdiFileImage } from '@mdi/js';
import './Upload.css';

const Upload = ({ onImportTextVisibleChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile({ name: file.name, size: file.size });
      setProgress(0);
      onImportTextVisibleChange(false);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile({ name: file.name, size: file.size });
    }
  };

  const uploadFile = () => {
    setProgress(0);
    setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            onImportTextVisibleChange(true);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 200);
    }, 1000);
  };

  return (
    <div>
      <div className='upload-container'>
        <label
          className={`dragNdrop ${dragging ? 'dragover' : ''}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type='file'
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          />
          <Icon path={mdiFileDocument} size={1.5} color='orange' />
          {selectedFile ? (
            <span>{selectedFile.name}</span>
          ) : (
            <span>
              Drag & Drop Here Or <strong>Browse</strong>
            </span>
          )}
        </label>
        <button
          id='upload-manifest'
          className='submit-button continue bold'
          onClick={uploadFile}
          disabled={!selectedFile || progress > 0}
        >
          Upload Manifest
        </button>
      </div>

      {selectedFile && progress !== 0 && (
        <div className='status-container'>
          <Icon path={mdiFileImage} size={1.5} color='orange' />
          <div className='bar-area no-gaps'>
            <span className='loading'>
              <p>{selectedFile.name}</p>
              <p className='file-size'>
                {selectedFile.size < 100000
                  ? (selectedFile.size / 1000).toFixed(1) + 'KB'
                  : (selectedFile.size / 1000000).toFixed(1) + 'MB'}
              </p>
            </span>
            <div className='progress-bar' style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
