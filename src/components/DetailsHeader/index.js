import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";

// Style import
import { Container, LogoTypography } from "./styles";

// Asset import
import MarvelLogo from "../../assets/marvel_icon.svg";

// Component import
import Input from "../Input";
import { SET_CHARACTER_SEARCH } from "../../store/characters/reducer";

function DetailsHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const [searchValue] = useDebounce(search, 1000);

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchValue) {
        return;
      }
      dispatch(SET_CHARACTER_SEARCH(searchValue));
      navigate("/");
    };

    handleSearch();
  }, [searchValue, dispatch, navigate]);

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
      <Input
        type="secondary"
        value={search}
        setValue={setSearch}
        maxWidth={"50vw"}
      />
    </Container>
  );
}

export default DetailsHeader;
