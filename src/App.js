import { useState } from 'react';
import Modal from './modal/modal'
import RaitingStars from './modal/raitingStars'
import LogoutModal from './modal/LogoutModal';
import WellDoneModal from './modal/WellDoneModal';
import CongratulationsModal from './modal/Congratulations'
import './App.css';


import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';


import {Title,Content, 
    Stars, Resume, Textarea,
Buttons,Back,Save} from './modal/modal.styled'



function App() {
  const [showModal, setShowModal] = useState(false);
  const [logoutModal,setLogoutModal]=useState(false);
  const [wellDoneModal, setWellDoneModal] = useState(false);
const [congratulationsModal, setCongratulationsModal]= useState(false);

const toggleCongratulationsModal =()=>{
  setCongratulationsModal(state=>!state)
}

  const toggleWellDoneModal =()=>{
    setWellDoneModal(state=>!state)
  }

  const toggleLogoutModal=()=>{
    setLogoutModal(state=>!state)
  };

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: values => {
      console.log(values);
      // dispatch();
    },
  });

  return (
    <div className="App">
      <button type='button' onClick={toggleCongratulationsModal}>Congratulations</button>
      {congratulationsModal&&(
<Modal onClose={toggleCongratulationsModal}>
  <CongratulationsModal toggleCongratulationsModal={toggleCongratulationsModal}/>
</Modal>
      )}
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
       <Content onSubmit={formik.handleSubmit}>
          <Title>Choose rating of the book</Title>
          <Stars><RaitingStars  onChange={formik.handleChange}/></Stars>
          <Resume>Resume</Resume>
          <Textarea value={formik.values.text} name='text' onChange={formik.handleChange} placeholder='...'></Textarea>
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





// import React, { useState } from 'react';
// import { Button, Text } from './LogOut.styled';

// import Modal from '../../Modal/Modal';
// import LogoutModal from '../../Modal/LogOutModal/LogOutModal';

// export default function LogOut() {
//   const [logoutModal, setLogoutModal] = useState(false);

//   const toggleLogoutModal = () => {
//     setLogoutModal(state => !state);
//   };

//   return (
//     <>
//       <Button onClick={toggleLogoutModal} type="button">
//         <Text>Вихід</Text>
//       </Button>
//       {logoutModal && (
//         <Modal onClose={toggleLogoutModal}>
//           <LogoutModal toggleLogoutModal={toggleLogoutModal} />
//         </Modal>
//       )}
//     </>
//   );
// }


// import React from 'react';
// import { Buttons, Back, Save } from '../ResumeModal/ResumeModal.styled';
// import { LogoutContent, Text } from './LogOutModal.styled';

// const LogoutModal = ({ toggleLogoutModal }) => {
//   return (
//     <LogoutContent>
//       <Text>Якщо Ви вийдете з програми незбережені дані будуть втрачені</Text>
//       <Buttons>
//         <Back onClick={toggleLogoutModal} type="button">
//           Відміна
//         </Back>
//         <Save type="submit">Вийти</Save>
//       </Buttons>
//     </LogoutContent>
//   );
// };

// export default LogoutModal;


// import styled from '@emotion/styled';
// import { theme } from '../../../constants/Theme';
// const {
//   colors: { primaryColor },
//   fonts: { mainFont },
//   fontSizing: { preTitleFontSize },
//   media: { tablet },
//   spacing,
// } = theme;

// export const LogoutContent = styled.div`
//   width: ${spacing(70)};
//   height: ${spacing(55.5)};

//   @media screen and (min-width: ${tablet}) {
//     width: ${spacing(98.5)};
//     height: ${spacing(51)};
//   }
// `;

// export const Text = styled.p`
//   margin-top: 0;
//   margin-bottom: ${spacing(5)};
//   padding-top: ${spacing(12)};
//   padding-left: ${spacing(8)};
//   padding-right: ${spacing(8)};
//   font-family: ${mainFont};
//   font-style: normal;
//   font-weight: 500;
//   font-size: ${preTitleFontSize};
//   line-height: ${spacing(5.5)};
//   text-align: center;
//   color: ${primaryColor};
// `;


// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// // import {Raiting} from './raitingStars.styled'

// export default function RaitingStars({ onChange }) {
//   const [value, setValue] = React.useState(0);
//   return (
//     <div>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           onChange(event);
//           setValue(newValue);
//         }}
//       />
//     </div>
//   );
// }

// import React from 'react';
// import { useFormik } from 'formik';
// import RaitingStars from './raitingStars';
// import {
//   Title,
//   Content,
//   Stars,
//   Resume,
//   Textarea,
//   Buttons,
//   Back,
//   Save,
// } from './ResumeModal.styled';

// const ResumeModal = ({ toggleModal }) => {
//   const formik = useFormik({
//     initialValues: {
//       text: '',
//     },
//     onSubmit: values => {
//       console.log(values);
//       // dispatch();
//     },
//   });
//   return (
//     <Content onSubmit={formik.handleSubmit}>
//       <Title>Обрати рейтинг книги</Title>
//       <Stars>
//         <RaitingStars onChange={formik.handleChange} />
//       </Stars>
//       <Resume>Резюме</Resume>
//       <Textarea
//         value={formik.values.text}
//         name="text"
//         onChange={formik.handleChange}
//         placeholder="..."
//       ></Textarea>
//       <Buttons>
//         <Back onClick={toggleModal} type="button">
//           Назад
//         </Back>
//         <Save type="submit">Зберегти</Save>
//       </Buttons>
//     </Content>
//   );
// };

// export default ResumeModal;


// import styled from '@emotion/styled';
// import { theme } from '../../../constants/Theme';
// const {
//   colors: { accentColor, activeColor, outlineColor, primaryColor },
//   fonts: { mainFont },
//   fontSizing: { preTitleFontSize, mainFontSize },
//   media: { tablet },
//   spacing,
// } = theme;

// export const Content = styled.form`
//   padding-top: ${spacing(5)};
//   padding-left: ${spacing(5)};
//   padding-right: ${spacing(5)};
//   padding-bottom: ${spacing(10)};

//   background: ${activeColor};
//   box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
// `;

// export const Title = styled.p`
//   padding: 0px;
//   margin-top: 0;
//   margin-bottom: ${spacing(5)};
//   font-family: ${mainFont};
//   font-style: normal;
//   font-weight: 500;
//   font-size: ${preTitleFontSize};
//   line-height: ${spacing(5)};
//   color: ${primaryColor};

//   @media screen and (min-width: ${tablet}) {
//     margin-bottom: ${spacing(3)};
//   }
// `;
// export const Stars = styled.div`
//   margin-bottom: ${spacing(5)};
//   position: relative;
//   font-size: ${spacing(4.5)};
//   color: ${outlineColor};
//   ::before {
//     content: '☆☆☆☆☆';
//   }
// `;
// export const Resume = styled.p`
//   margin-top: 0;
//   margin-bottom: ${spacing(2)};
//   font-family: ${mainFont};
//   font-style: normal;
//   font-weight: 500;
//   font-size: ${preTitleFontSize};
//   line-height: ${spacing(5)};
//   color: ${primaryColor};

//   @media screen and (min-width: ${tablet}) {
//     margin-bottom: ${spacing(3)};
//   }
// `;

// export const Textarea = styled.textarea`
//   width: ${spacing(60)};
//   height: ${spacing(42.5)};
//   margin-bottom: ${spacing(5)};
//   border: 1px solid ${outlineColor};
//   box-sizing: border-box;
//   resize: none;
//   padding: ${spacing(2)};

//   @media screen and (min-width: ${tablet}) {
//     margin-bottom: ${spacing(7)};
//     width: ${spacing(142)};
//     height: ${spacing(42.5)};
//   }
// `;
// export const Buttons = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const Back = styled.button`
//   margin-top: 0;
//   padding: 0;
//   margin-right: ${spacing(4)};
//   box-sizing: border-box;

//   font-family: ${mainFont};
//   font-style: normal;
//   font-weight: 500;
//   font-size: ${mainFontSize};
//   line-height: ${spacing(4.25)};
//   color: ${primaryColor};
//   text-align: center;
//   cursor: pointer;

//   width: ${spacing(24.5)};
//   height: ${spacing(10)};
//   border: 1px solid ${primaryColor};
//   background: ${activeColor};
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

//   &:hover,
//   &:focus {
//     color: ${activeColor};
//     background: ${accentColor};
//     border: 1px solid ${accentColor};
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
//     transition: box-shadow 250ms ease;
//   }

//   @media screen and (min-width: ${tablet}) {
//     width: ${spacing(32.5)};
//     height: ${spacing(10)};
//     margin-right: ${spacing(7)};
//   }
// `;
// export const Save = styled.button`
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;

//   font-family: ${mainFont};
//   font-style: normal;
//   font-weight: 500;
//   font-size: ${mainFontSize};
//   line-height: ${theme.spacing(17)};
//   color: ${activeColor};
//   text-align: center;
//   cursor: pointer;

//   width: ${spacing(24.5)};
//   height: ${spacing(10)};
//   background: ${accentColor};
//   border: 1px solid ${accentColor};
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

//   &:hover,
//   &:focus {
//     color: ${primaryColor};
//     border: 1px solid ${primaryColor};
//     background: ${activeColor};
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
//     transition: box-shadow 250ms ease;
//   }

//   @media screen and (min-width: ${tablet}) {
//     width: ${spacing(32.5)};
//     height: ${spacing(10)};
//   }
// `;
