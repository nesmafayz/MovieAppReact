import { createSlice } from "@reduxjs/toolkit";

const WatchList = [];
const AddToFavSlice = createSlice({
  name: "AddToFavSlice",
  initialState: WatchList,
  reducers: {
    AddToWatchList: (state, action) => {
      state.push(action.payload);
    },
    RemoveFromWatchList: (state, action) => {
      const index = state.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { AddToWatchList, RemoveFromWatchList } = AddToFavSlice.actions;

export default AddToFavSlice.reducer;
