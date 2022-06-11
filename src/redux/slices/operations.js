// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const resume = createAsyncThunk('resume/resume', async credentials => {
//     try {
//       const { data } = await axios.post('/resume/resume', credentials);
//       return data;
//     } catch (error) {
//       return (
//         console.log(error)
//       );
//     }
// });

// const resumeOperations ={
//     resume,
// }
// export default resumeOperations;