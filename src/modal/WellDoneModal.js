import React from 'react';
import {Buttons,Back,Save} from './modal.styled'
import {WellDoneContent,Text} from './WellDoneModal.styled'

const WellDoneModal=({toggleWellDoneModal})=>{
    return(
        <WellDoneContent>
            <div>
            <svg><use href='../img/good.svg'></use></svg>
            </div>
          <Text>Well done!
but you need to be
a little bit faster.
You can do it</Text>
          <Buttons>
            <Save type='submit'>New training</Save>
            <Back onClick={toggleWellDoneModal} type='button'>Back</Back>
          </Buttons>
        </WellDoneContent>
    )
};

export default WellDoneModal;