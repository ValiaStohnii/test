import React from 'react'
import {Overlay,Modal,Title,Content, 
  Stars, Resume, Textarea,Buttons,Back,Save} from './modal.styled'
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');

const modal=({toggleModal})=>{
  return createPortal(
    <Overlay >
      <Modal >
        <Content>
      <Title>Choose rating of the book</Title>
      <Stars>*****</Stars>
      <Resume>Resume</Resume>
      <Textarea placeholder='...'></Textarea>
      <Buttons>
        <Back onClick={toggleModal} type='submit'>Back</Back>
        <Save type='submit'>Save</Save>
      </Buttons>
      </Content>
      </Modal>
    </Overlay>, 
    modalRoot,
  )
}

export default modal;







// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.keyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.keyDown);
//   }

//   keyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   overlayClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Overlay" onClick={this.overlayClick}>
//         <div className="Modal">{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }
// export default Modal;