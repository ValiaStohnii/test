import * as React from 'react';
import Rating from '@mui/material/Rating';
// import {Raiting} from './raitingStars.styled'

export default function RaitingStars(){
    const [value, setValue] = React.useState(0);
    return(
        <div>
     <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </div>
    )
}



// import React from 'react';
// import { Raiting, Input, Star } from './raitingStars.styled';

// const raitingStars = () => {
//   return (
//     <Raiting>
//       <Input id="star_5" type="radio" name="raiting-star" value="5"></Input>
//       <Star for="star_5"></Star>
//       <Input id="star_4" type="radio" name="raiting-star" value="4"></Input>
//       <Star for="star_4"></Star>
//       <Input
//         id="star_3"
//         type="radio"
//         checked
//         name="raiting-star"
//         value="3"
//       ></Input>
//       <Star for="star_3"></Star>
//       <Input id="star_2" type="radio" name="raiting-star" value="2"></Input>
//       <Star for="star_2"></Star>
//       <Input id="star_1" type="radio" name="raiting-star" value="1"></Input>
//       <Star for="star_1"></Star>
//     </Raiting>
//   );
// };

// export default raitingStars;
