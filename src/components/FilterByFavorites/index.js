import React from "react";

// Style import
import { Container, ButtonText } from "./styles";

// Asset import
import HeartFilled from "../../assets/favorito_01.svg";

function FilterByFavorites({}) {
  return (
    <Container type="button" onClick={() => console.log(123)}>
      <img src={HeartFilled} alt="Heart icon" />
      <ButtonText>Somente favoritos</ButtonText>
    </Container>
  );
}

export default FilterByFavorites;
