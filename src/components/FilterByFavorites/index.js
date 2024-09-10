import React from "react";

// Style import
import { Container, ButtonText } from "./styles";

// Asset import
import HeartFilled from "../../assets/favorito_01.svg";

function FilterByFavorites({ setShowFavorites }) {
  return (
    <Container type="button" onClick={() => setShowFavorites((prev) => !prev)}>
      <img src={HeartFilled} alt="Heart icon" />
      <ButtonText>Somente favoritos</ButtonText>
    </Container>
  );
}

export default FilterByFavorites;
