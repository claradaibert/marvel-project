import React, { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-debounce";
import { useSelector, useDispatch } from "react-redux";

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
import { SET_CHARACTER_SEARCH } from "../../store/characters/reducer";
import Loader from "../../components/Loader";

function Home() {
  const dispatch = useDispatch();
  const characterSearch = useSelector((state) => state.characterSearch);

  // Local states
  const [loading, setLoading] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);
  const [search, setSearch] = useState(characterSearch);
  const [characterList, setCharacterList] = useState([]);
  const [charactersTotal, setCharactersTotal] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);
  const [characterOrder, setCharacterOrder] = useState("modified");

  const [searchValue] = useDebounce(search, 1000);

  const handleSeeMore = async () => {
    setMoreLoading(true);
    await getCharacterList(searchValue, characterList?.length, characterOrder)
      .then((data) => {
        setCharacterList((prev) => prev.concat(data.list));
      })
      .finally(() => setMoreLoading(false));
  };

  const handleSearch = useCallback(async () => {
    setLoading(true);

    await getCharacterList(searchValue, 0, characterOrder)
      .then((data) => {
        setCharacterList(data?.list);
        setCharactersTotal(data?.total);
      })
      .finally(() => {
        setLoading(false);
        dispatch(SET_CHARACTER_SEARCH(undefined));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, characterOrder, dispatch]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <Container>
      <HomeHeader />
      <HomeTitle />
      <Input type="primary" value={search} setValue={setSearch} />
      <ListFilters
        characterTotals={charactersTotal}
        setShowFavorites={setShowFavorites}
        loading={loading}
        characterOrder={characterOrder}
        setCharacterOrder={setCharacterOrder}
      />
      {loading ? (
        <Loader />
      ) : (
        <CharactersList
          characters={characterList}
          showFavorites={showFavorites}
        />
      )}
      {!showFavorites && characterList?.length < charactersTotal && (
        <button
          className="moreLoadingButton"
          type="button"
          disabled={moreLoading}
          onClick={() => handleSeeMore()}
        >
          {moreLoading ? <Loader padding={"0rem"} size={"1rem"} /> : "Ver mais"}
        </button>
      )}
    </Container>
  );
}

export default Home;
