import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const spellsSlice = createSlice({
  name: 'spells',
  initialState,
  reducers: {
    addSpells(state, action) {
      state.data = action.payload.results;
    },
  },
});

export const { addSpells } = spellsSlice.actions;
export default spellsSlice.reducer;
