import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

// Style import
import { Container } from "./styles";

// Component import
import HomeHeader from "../../components/HomeHeader";
import HomeTitle from "../../components/HomeTitle";
import Input from "../../components/Input";
import CharactersList from "../../components/CharactersList";
import ListFilters from "../../components/ListFilters";

// Controller import
import { getCharacterList } from "../../controllers/Characters";

function Home() {
  // Local states
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [initialCharactersData, setInitialCharactersData] = useState({});
  const [characterList, setCharacterList] = useState([]);
  const [charactersTotal, setCharactersTotal] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);

  const [searchValue] = useDebounce(search, 1000);

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);

      if (searchValue.length === 0) {
        setCharacterList(initialCharactersData?.list);
        setCharactersTotal(initialCharactersData?.total);
        setLoading(false);
        return;
      }

      await getCharacterList(searchValue, 0)
        .then((data) => {
          setCharacterList(data.list);
          setCharactersTotal(data.total);
        })
        .finally(() => setLoading(false));
      getCharacterList();
    };

    handleSearch();
  }, [searchValue, initialCharactersData]);

  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      await getCharacterList(undefined, 1)
        .then((data) => {
          setCharacterList(data.list);
          setInitialCharactersData(data);
          setCharactersTotal(data.total);
        })
        .finally(() => setLoading(false));
    };

    getList();
  }, []);

  return (
    <Container>
      <HomeHeader />
      <HomeTitle />
      <Input type="primary" value={search} setValue={setSearch} />
      <ListFilters
        characterTotals={charactersTotal}
        setCharacterList={setCharacterList}
        setCharactersTotal={setCharactersTotal}
        setLoading={setLoading}
        setShowFavorites={setShowFavorites}
        searchValue={searchValue}
        loading={loading}
      />
      {loading ? (
        <>Loading ...</>
      ) : (
        <CharactersList
          characters={characterList}
          showFavorites={showFavorites}
        />
      )}
    </Container>
  );
}

export default Home;
