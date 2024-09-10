import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favoriteCharacters: [],
  characterSearch: undefined,
};

const charSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    ADD_CHARACTER_TO_FAVORITES: (state, action) => {
      if (state.favoriteCharacters.length === 5) {
        toast.error("Só é possível curtir 5 personagens");
        return;
      }
      state.favoriteCharacters = [...state.favoriteCharacters, action.payload];
    },
    REMOVE_CHARACTER_FROM_FAVORITES: (state, action) => {
      const filteredCharList = state.favoriteCharacters.filter(
        (char) => char.name !== action.payload.name
      );
      state.favoriteCharacters = filteredCharList;
    },
    SET_CHARACTER_SEARCH: (state, action) => {
      state.characterSearch = action.payload;
    },
    CLEAR_CHARACTER_SEARCH: (state) => {
      state.characterSearch = undefined;
    },
    CLEAR_CHARACTERS_LIST: (state) => {
      state.favoriteCharacters = [];
    },
  },
});

export const charactersReducer = charSlice.reducer;

export const {
  ADD_CHARACTER_TO_FAVORITES,
  REMOVE_CHARACTER_FROM_FAVORITES,
  CLEAR_CHARACTERS_LIST,
  SET_CHARACTER_SEARCH,
  CLEAR_CHARACTER_SEARCH,
} = charSlice.actions;
