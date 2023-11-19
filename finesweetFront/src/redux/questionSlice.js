import { createSlice } from "@reduxjs/toolkit";

const questionslice = createSlice({
    name: 'questions',
    initialState: {
        isUpdate: false,
        title: '',
        text: '',
    },
    reducers: {
        
    }
})

export const {} = questionslice.actions;

export default questionslice.reducer