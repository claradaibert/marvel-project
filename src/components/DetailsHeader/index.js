import React from "react";
import { useNavigate } from "react-router-dom";

// Style import
import { Container, LogoTypography } from "./styles";

// Asset import
import MarvelLogo from "../../assets/marvel_icon.svg";

// Component import
import Input from "../Input";

function DetailsHeader({ search, setSearch }) {
  const navigate = useNavigate();
  return (
    <Container>
      <button
        className="logoContainer"
        type="button"
        onClick={() => navigate("/")}
      >
        <img src={MarvelLogo} alt="Marvel logo" />
        <LogoTypography>Search heroes</LogoTypography>
      </button>
      <Input type="secondary" value={search} setValue={setSearch} maxWidth={"50vw"}/>
    </Container>
  );
}

export default DetailsHeader;
