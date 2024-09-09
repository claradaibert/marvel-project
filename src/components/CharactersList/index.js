import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Style import
import { Container, CharName } from "./styles";

// Asset import
import HeartOutline from "../../assets/favorito_02.svg";
import HeartFilled from "../../assets/favorito_01.svg";

// Action import
import {
  ADD_CHARACTER_TO_FAVORITES,
  CLEAR_CHARACTERS_LIST,
  REMOVE_CHARACTER_FROM_FAVORITES,
} from "../../store/characters/reducer";

function CharactersList({ characters }) {
  const dispatch = useDispatch();
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters);
  console.log(favoriteCharacters, "favoritos");

  const isCharacterFavorited = (character) => {
    const isCharacterAlreadyFavorited = favoriteCharacters.some(
      (char) => char.name === character.name
    );

    return isCharacterAlreadyFavorited;
  };

  const handleFavoriteButton = (character) => {
    if (isCharacterFavorited(character)) {
      dispatch(REMOVE_CHARACTER_FROM_FAVORITES(character));
      return;
    }
    dispatch(ADD_CHARACTER_TO_FAVORITES(character));
  };

  return (
    <Container>
      {characters?.map((character) => (
        <li key={character?.id}>
          <button className="imgContainer" type="button">
            <img
              alt={`${character?.name} photo`}
              aria-hidden
              src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            />
          </button>
          <div className="nameContainer">
            <button type="button">
              <CharName>{character?.name}</CharName>
            </button>
            <button
              type="button"
              onClick={() => handleFavoriteButton(character)}
            >
              <img
                src={
                  isCharacterFavorited(character) ? HeartFilled : HeartOutline
                }
                alt="heart icon"
              />
            </button>
          </div>
        </li>
      ))}
    </Container>
  );
}

export default CharactersList;
