import React from "react";

// Style import
import {
  HomeTitleContainer,
  HomeTitleTypography,
  HomeSubtitle,
} from "./styles";

function HomeTitle() {
  return (
    <HomeTitleContainer>
      <HomeTitleTypography>EXPLORE O UNIVERSO</HomeTitleTypography>
      <HomeSubtitle>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </HomeSubtitle>
    </HomeTitleContainer>
  );
}

export default HomeTitle;
