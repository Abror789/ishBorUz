import {createSlice} from "@reduxjs/toolkit";

const initialState={
    value:true
}

export const pageSlice=createSlice({
    name:'page',
    initialState,
    reducers:{
        truePage:(state)=>{
            state.value=true
        },
        falsePage:(state)=>{
            state.value=false
        }
    }
})

export const {falsePage,truePage}=pageSlice.actions

export default pageSlice.reducer
