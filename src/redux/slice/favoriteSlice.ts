import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
