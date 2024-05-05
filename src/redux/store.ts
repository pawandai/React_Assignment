import { configureStore } from '@reduxjs/toolkit';
import spellsReducer from './slice/allSpellsSlice';
import spellReducer from './slice/spellSlice';
import favoriteReducer from './slice/favoriteSlice';

export const store = configureStore({
  reducer: {
    spells: spellsReducer,
    spell: spellReducer,
    favorites: favoriteReducer,
  },
});
