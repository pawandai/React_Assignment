import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {
    addSpell(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addSpell } = spellSlice.actions;
export default spellSlice.reducer;
