import { useState } from 'react';
import Modal from './modal/modal'
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(state => !state);
  };

  const toggleModal = () => {
    setShowModal(state => !state);

  };

  return (
    <div className="App">
     <button type='button' onClick={toggleModal}>modal</button>
     {showModal && (
     <Modal toggleModal={toggleModal} ></Modal>
     )}
     </div>
  );
}

export default App;
