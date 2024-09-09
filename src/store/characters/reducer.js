import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCharacters: [],
};

const charSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    ADD_CHARACTER_TO_FAVORITES: (state, action) => {
      state.favoriteCharacters = [...state.favoriteCharacters, action.payload];
    },
    REMOVE_CHARACTER_FROM_FAVORITES: (state, action) => {
      const filteredCharList = state.favoriteCharacters.filter(
        (char) => char.name === action.payload.name
      );
      state.favoriteCharacters = filteredCharList;
    },
  },
});

export const charactersReducer = charSlice.reducer;

export const { ADD_CHARACTER_TO_FAVORITES, REMOVE_CHARACTER_FROM_FAVORITES } =
  charSlice.actions;
