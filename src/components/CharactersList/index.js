import React from "react";

// Style import
import { Container, CharName } from "./styles";

// Asset import


function CharactersList({ characters }) {
  return (
    <Container>
      {characters?.map((character) => (
        <li>
          <div className="imgContainer">
            <img
              alt={`${character?.name} photo`}
              aria-hidden
              src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            />
          </div>
          <div className="nameContainer">
            <CharName>{character?.name}</CharName>
            <button>

            </button>
          </div>
        </li>
      ))}
    </Container>
  );
}

export default CharactersList;
