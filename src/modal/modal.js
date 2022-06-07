import React,{Component} from 'react'
import { createPortal } from 'react-dom';
import {Overlay,Modals} from './modal.styled'

const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  overlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.overlayClick}>
        <Modals>{this.props.children}</Modals>
      </Overlay>,
      modalRoot,
    );
  }
}
export default Modal;


// import React from 'react'
// import {Overlay,Modal,Title,Content, 
//   Stars, Resume, Textarea,Buttons,Back,Save} from './modal.styled'
// import { createPortal } from 'react-dom';


// const modalRoot = document.querySelector('#modal-root');

// const modal=({toggleModal})=>{
//   return createPortal(
//     <Overlay >
//       <Modal >
//         <Content>
//       <Title>Choose rating of the book</Title>
//       <Stars>*****</Stars>
//       <Resume>Resume</Resume>
//       <Textarea placeholder='...'></Textarea>
//       <Buttons>
//         <Back onClick={toggleModal} type='submit'>Back</Back>
//         <Save type='submit'>Save</Save>
//       </Buttons>
//       </Content>
//       </Modal>
//     </Overlay>, 
//     modalRoot,
//   )
// }

// export default modal;

