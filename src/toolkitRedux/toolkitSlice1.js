import { createSlice } from "@reduxjs/toolkit";



const visibleAddPanel = createSlice({
    name:'visibleAddPanel',
    initialState:{
        visible: undefined,
        visibleAdd: true
    },
    reducers: {
       setVisibleId:(state,action)=>{
        state.visible = action.payload;
       },
       setVisibleAdd: (state) => {
        state.visibleAdd = !state.visibleAdd;
       }
    }
})


export default visibleAddPanel;
