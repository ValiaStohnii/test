import { useState } from 'react';
import Modal from './modal/modal'
import RaitingStars from './modal/raitingStars'
import LogoutModal from './modal/LogoutModal';
import WellDoneModal from './modal/WellDoneModal';
import './App.css';

import {Title,Content, 
    Stars, Resume, Textarea,
    Buttons,Back,Save} from './modal/modal.styled'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [logoutModal,setLogoutModal]=useState(false);
  const [wellDoneModal, setWellDoneModal] = useState(false);

  const toggleWellDoneModal =()=>{
    setWellDoneModal(state=>!state)
  }

  const toggleLogoutModal=()=>{
    setLogoutModal(state=>!state)
  };

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <div className="App">
      <button type='button' onClick={toggleWellDoneModal}>Well done!</button>
      {wellDoneModal&&(
        <Modal onClose={toggleWellDoneModal}>
<WellDoneModal toggleWellDoneModal={toggleWellDoneModal}/>
        </Modal>
      )}
      <button type='button' onClick={toggleLogoutModal}>log out</button>
      {logoutModal&&(
        <Modal onClose={toggleLogoutModal}>
          <LogoutModal toggleLogoutModal={toggleLogoutModal}/>
        </Modal>
      )}
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
