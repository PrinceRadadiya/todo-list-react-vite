import { createSlice } from "@reduxjs/toolkit";

export const AddtodoTask = createSlice({
    name:'addtask',
    initialState:[],
    reducers:{
        Add(state,action){
            state.push(action.payload);
        },
        Remove(state,action){
            // return state.filter((addtask,idx)=>idx !== action.payload)
            state.splice(action.payload,1)
        }
    }
})

export const{Add,Remove} = AddtodoTask.actions
export default AddtodoTask.reducer