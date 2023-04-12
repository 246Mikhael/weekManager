import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import visibleAddPanel from "./toolkitSlice1";
import tasks from "./toolkitSlice2";
import week from "./toolkitSlice3";

const loadState = () => {
  let preloadedState = localStorage.getItem('reduxState');

  if(preloadedState === null){
    return
  }

  return JSON.parse(preloadedState);
}


const rootReducer =  combineReducers({
  visibleAddPanel: visibleAddPanel.reducer,
  tasks: tasks.reducer,
  week: week.reducer,
})



export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
})

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})