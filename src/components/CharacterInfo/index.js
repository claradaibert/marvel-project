import React from "react";

// Style import
import {
  Container,
  CharacterDescription,
  MediaInfoTitleTypography,
} from "./styles";

// Component import
import MediaInfo from "../MediaInfo";
import CharacterInfoTitle from "../CharacterInfoTitle";

// Asset import
import StarIcon from "../../assets/avaliacao_off.svg";

function CharacterInfo({ character }) {
  return (
    <Container>
      <CharacterInfoTitle character={character} />
      <CharacterDescription>{character?.description}</CharacterDescription>
      <div className="mediaInfoContainer">
        <MediaInfo value={character?.comics?.available} title="Quadrinhos" />
        <MediaInfo value="N/A" title="Filmes" />
      </div>
      <div className="characterRating">
        <MediaInfoTitleTypography>Rating: </MediaInfoTitleTypography>
        <div className="stars">
          <img src={StarIcon} alt="rating start icon" />
          <img src={StarIcon} alt="rating start icon" />
          <img src={StarIcon} alt="rating start icon" />
          <img src={StarIcon} alt="rating start icon" />
          <img src={StarIcon} alt="rating start icon" />
        </div>
      </div>
      <div className="characterRating">
        <MediaInfoTitleTypography>Último quadrinho: </MediaInfoTitleTypography>
      </div>
    </Container>
  );
}

export default CharacterInfo;
