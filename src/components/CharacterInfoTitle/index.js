import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Style import
import { Container, CharacterName } from "./styles";

// Asset import
import HeartOutline from "../../assets/favorito_02.svg";
import HeartFilled from "../../assets/favorito_01.svg";

// Action import
import {
  ADD_CHARACTER_TO_FAVORITES,
  REMOVE_CHARACTER_FROM_FAVORITES,
} from "../../store/characters/reducer";

// Util import
import { isCharacterFavorited } from "../../utils/isCharacterFavorited";

function CharacterInfoTitle({ character }) {
  const dispatch = useDispatch();
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters);

  const handleFavoriteButton = (character) => {
    if (isCharacterFavorited(character, favoriteCharacters)) {
      dispatch(REMOVE_CHARACTER_FROM_FAVORITES(character));
      return;
    }
    dispatch(ADD_CHARACTER_TO_FAVORITES(character));
  };

  return (
    <Container>
      <CharacterName>{character.name}</CharacterName>
      <button type="button" onClick={() => handleFavoriteButton(character)}>
        <img
          src={
            isCharacterFavorited(character, favoriteCharacters)
              ? HeartFilled
              : HeartOutline
          }
          alt="heart icon"
        />
      </button>
    </Container>
  );
}

export default CharacterInfoTitle;
