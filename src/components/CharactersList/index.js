import React from "react";

// Style import
import { Container } from "./styles";

// Component import
import ListItem from "../ListItem";

function CharactersList({ characters }) {
  return (
    <Container>
      {characters?.map((character) => (
        <ListItem character={character} />
      ))}
    </Container>
  );
}

export default CharactersList;
