import { configureStore } from '@reduxjs/toolkit';
import spellsReducer from './slice/allSpellsSlice';
import spellReducer from './slice/spellSlice';

export const store = configureStore({
  reducer: {
    spells: spellsReducer,
    spell: spellReducer,
  },
});
