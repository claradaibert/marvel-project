import React from "react";
import { useSelector } from "react-redux";

// Style import
import { Container } from "./styles";

// Component import
import ListItem from "../ListItem";

function CharactersList({ characters, showFavorites }) {
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters);

  const chosenList = showFavorites ? favoriteCharacters : characters;

  return (
    <Container>
      {chosenList?.map((character) => (
        <ListItem character={character} />
      ))}
    </Container>
  );
}

export default CharactersList;
