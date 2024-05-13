import { createSlice } from "@reduxjs/toolkit";

  const languageslice= createSlice({
    name:"language",
    initialState:{
        current_lang:"en",
        available_lag:["en", "ar","fr"]
    }
    ,
    reducers:{
        updateLanguage:(state,action)=>{
state.current_lang= action.payload
        }
    }
  })
  export const {
    updateLanguage
  }= languageslice.actions 
  export default  languageslice.reducer