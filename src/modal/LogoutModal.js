import React from 'react';
import {Buttons,Back,Save} from './modal.styled'
import {LogoutContent,Text} from './LogoutModal.styled'

const LogoutModal=({toggleLogoutModal})=>{
    return(
        <LogoutContent>
          <Text>The changes you made will be lost if you
            navigate away from this application</Text>
          <Buttons>
            <Back onClick={toggleLogoutModal} type='button'>Cancel</Back>
            <Save type='submit'>Leave this app</Save>
          </Buttons>
        </LogoutContent>
    )
};

export default LogoutModal;