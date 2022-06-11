import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice =createSlice({
    name: 'resume',
    initialState:{
        values: null,
    },
    reducers:{
        resume:(state, action)=>{
            state.values=action.payload.values;
        },
        raitingStars:(state, action)=>{
            state.values=action.payload.values;
        }
    }
});

export const {resume,raitingStars}=resumeSlice.actions;

export default resumeSlice.reducer;