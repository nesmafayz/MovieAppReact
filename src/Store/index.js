import { counter } from "@fortawesome/fontawesome-svg-core";
import { configureStore } from "@reduxjs/toolkit";
import Language from "../Slices/Language";
import Counter from "../Slices/Counter";
import AddToFavSlice from "../Slices/AddToWatchList"
const store= configureStore({
    reducer:{
      Counter:Counter,
      Language:Language,
      AddToFavSlice: AddToFavSlice
    }
})
export default  store;
