import React from "react";
import {
  Container,
  MediaInfoTypography,
  MediaInfoTitleTypography,
} from "./styles";

import ComicIcon from "../../assets/ic_quadrinhos.svg";
import FilmIcon from "../../assets/ic_trailer.svg";

function MediaInfo({ value, title }) {
  return (
    <Container>
      <MediaInfoTitleTypography>{title}</MediaInfoTitleTypography>
      <div className="details">
        <img
          src={title === "Quadrinhos" ? ComicIcon : FilmIcon}
          alt="Comic icon"
        />
        <MediaInfoTypography>{value ?? 0}</MediaInfoTypography>
      </div>
    </Container>
  );
}

export default MediaInfo;
