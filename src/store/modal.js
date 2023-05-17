import { createSlice } from '@reduxjs/toolkit';

const initialModalState = {
    isModalOpen:false,showModal:{},
}
const modalSlice = createSlice({
    name :'openingModal',
    initialState:initialModalState,
    reducers:{
        open(state){
            state.isModalOpen = true;
        },
        close(state){
            state.isModalOpen = false;
        },
        showModal(state,action){
            state.showModal = action.payload;
        }
    }
})

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;