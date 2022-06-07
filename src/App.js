import { useState } from 'react';
import Modal from './modal/modal'
import RaitingStars from './modal/raitingStars'
import './App.css';

import {Title,Content, 
    Stars, Resume, Textarea,
    Buttons,Back,Save} from './modal/modal.styled'

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <div className="App">
     <button type='button' onClick={toggleModal}>modal</button>
     {showModal && (
     <Modal onClose={toggleModal} >
       <Content>
          <Title>Choose rating of the book</Title>
          <Stars><RaitingStars/></Stars>
          <Resume>Resume</Resume>
          <Textarea placeholder='...'></Textarea>
          <Buttons>
            <Back onClick={toggleModal} type='button'>Back</Back>
            <Save type='submit'>Save</Save>
          </Buttons>
       </Content>
     </Modal>
     )}
     </div>
  );
};

export default App;
