import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
    name:'tasks',
    initialState:{
        tasks: {}
    },
    reducers: {
       setTask: (state,action) => {
        
        let task = action.payload.newTask;
          if(!state.tasks[action.payload.date]){
            
            state.tasks[action.payload.date] =
               [{id: action.payload.id, value: task, isChecked: false, isEdit: true}];
             } else{
               state.tasks[action.payload.date]
                 .push({id: action.payload.id, value: task, isChecked: false, isEdit: true})             
             }         
       },
       changeCheck: (state, action)=>{
      let value = state.tasks[action.payload.date];
      
       let result = value.map(function(item){
          if(item.id === action.payload.id){
            item.isChecked = !item.isChecked;
          }
           return item;
        })
         state.tasks[action.payload.date] = result;
       },


       deleteTask: (state, action) => {
        let value = state.tasks[action.payload.date];

        let result = value.filter(item=>
          item.id !== action.payload.id
        )
        state.tasks[action.payload.date] = result;
       },
       
       deleteEmptyDay: (state, action) => {
        delete state.tasks[action.payload]
       },


       editTask: (state, action) => {
        let value = state.tasks[action.payload.date];
      
        let result = value.map(function(item){
           if(item.id === action.payload.id){
             item.value = action.payload.value;
           }
            return item;
         })
          state.tasks[action.payload.date] = result;
       },
    }
})


export default tasks;
