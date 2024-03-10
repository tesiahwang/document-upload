import './App.css';
import Modal from './components/Modal/Modal';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.documentElement.classList.remove('overflow-hidden');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const openModal = () => {
    setModalOpen(true);
    document.documentElement.classList.toggle('overflow-hidden');
  };

  return (
    <div className='App'>
      <button className='upload-button' onClick={openModal}>
        Upload a Document
      </button>
      {modalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;
