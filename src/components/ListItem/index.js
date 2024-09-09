import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Style import
import { CharName } from "./styles";

// Asset import
import HeartOutline from "../../assets/favorito_02.svg";
import HeartFilled from "../../assets/favorito_01.svg";

// Action import
import {
  ADD_CHARACTER_TO_FAVORITES,
  REMOVE_CHARACTER_FROM_FAVORITES,
} from "../../store/characters/reducer";

function ListItem({ character }) {
  const dispatch = useDispatch();
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters);

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
        <button type="button" onClick={() => handleFavoriteButton(character)}>
          <img
            src={isCharacterFavorited(character) ? HeartFilled : HeartOutline}
            alt="heart icon"
          />
        </button>
      </div>
    </li>
  );
}

export default ListItem;
