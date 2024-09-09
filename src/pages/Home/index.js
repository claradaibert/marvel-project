import React, { useState, useEffect } from "react";

// Style import
import { Container } from "./styles";

// Component import
import HomeHeader from "../../components/HomeHeader";
import HomeTitle from "../../components/HomeTitle";
import Input from "../../components/Input";
import CharactersList from "../../components/CharactersList";

// Controller import
import { getCharacterList } from "../../controllers/Characters";

function Home() {
  const [search, setSearch] = useState("");
  const [characterList, setCharacterList] = useState([]);
  const [charactersTotal, setCharactersTotal] = useState(0);

  useEffect(() => {
    const getList = async () => {
      await getCharacterList(undefined, 1).then((data) => {
        setCharacterList(data.list);
        setCharactersTotal(data.total);
      });
    };

    getList();
  }, []);

  return (
    <Container>
      <HomeHeader />
      <HomeTitle />
      <Input type="primary" value={search} setValue={setSearch} />
      <CharactersList characters={characterList} />
    </Container>
  );
}

export default Home;
