import React from 'react';
import goodIcon from '../img/orange-good.svg'
import {Done,CongratulationsContent,Text, Svg, Icon} from './Congratulations.styled'


const CongratulationsModal = ({toggleCongratulationsModal})=>{
    return(
<CongratulationsContent>
<Svg>
<Icon src={goodIcon} alt="trumb up" width="44"></Icon>
            </Svg>
          <Text>Congratulations!
Another book read.</Text>
            <Done onClick={toggleCongratulationsModal} type='submit'>Done</Done>
           
         
</CongratulationsContent>
    )
};

export default CongratulationsModal;