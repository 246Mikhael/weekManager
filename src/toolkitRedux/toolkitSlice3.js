import { createSlice } from "@reduxjs/toolkit";

const week = createSlice({
    name:'week',
    initialState:0,
    reducers: {
       increase: state=>state + 7,
       decrease: state => state - 7,
       currentWeek: state => state = 0
    }
})


export default week;
