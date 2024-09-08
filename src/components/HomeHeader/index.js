import React from "react";

// Style import
import { Header, HeaderSubtitle } from "./styles";

// Asset import
import MarvelLogo from "../../assets/logo.svg";

function HomeHeader() {
  return (
    <Header>
      <img src={MarvelLogo} alt="Marvel Logo" />
      <HeaderSubtitle>Search heroes</HeaderSubtitle>
    </Header>
  );
}

export default HomeHeader;