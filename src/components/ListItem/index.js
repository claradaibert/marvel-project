import React from "react";
import { useNavigate } from "react-router-dom";
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

// Util import
import { isCharacterFavorited } from "../../utils/isCharacterFavorited";

function ListItem({ character }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters);

  const handleFavoriteButton = (character) => {
    if (isCharacterFavorited(character, favoriteCharacters)) {
      dispatch(REMOVE_CHARACTER_FROM_FAVORITES(character));
      return;
    }
    dispatch(ADD_CHARACTER_TO_FAVORITES(character));
  };

  return (
    <li key={character?.id}>
      <button
        className="imgContainer"
        type="button"
        onClick={() => navigate(`/characterDetails/${character.id}`)}
      >
        <img
          alt={`${character?.name} photo`}
          aria-hidden
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        />
      </button>
      <div className="nameContainer">
        <button
          type="button"
          onClick={() => navigate(`/characterDetails/${character.id}`)}
        >
          <CharName>{character?.name}</CharName>
        </button>
        <button type="button" onClick={() => handleFavoriteButton(character)}>
          <img
            src={isCharacterFavorited(character, favoriteCharacters) ? HeartFilled : HeartOutline}
            alt="heart icon"
          />
        </button>
      </div>
    </li>
  );
}

export default ListItem;
