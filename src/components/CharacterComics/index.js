import React from "react";

// Style import
import { ComicDescription, Container, Title } from "./styles";

function CharacterComics({ comics }) {
  const getComicImageSource = (comic) => {
    return `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`;
  };

  return (
    <Container>
      <Title>Últimos lançamentos:</Title>
      <div className="comicsList">
        {comics?.map((comic) => (
          <li>
            <div className="imgContainer">
              <img src={getComicImageSource(comic)} alt="Comic front cover" />
            </div>
            <div className="nameContainer">
              <ComicDescription>{comic?.title || ""}</ComicDescription>
            </div>
          </li>
        ))}
      </div>
    </Container>
  );
}

export default CharacterComics;
