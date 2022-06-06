import { useState } from 'react';
import Modal from './modal/modal'
import './App.css';

function App() {
  const [modalActive, setModalActive]=useState(true)
  return (
    <div className="App">
     <button >modal</button>
     <Modal active={modalActive} setActive={setModalActive}></Modal>
    </div>
  );
}

export default App;
