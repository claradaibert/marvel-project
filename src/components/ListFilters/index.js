import React from "react";

// Style import
import { Container, TotalsTypography } from "./styles";

// Asset import
import FilterByName from "../FilterByName";
import FilterByFavorites from "../FilterByFavorites";

function ListFilters({
  characterTotals,
  setCharacterList,
  setCharactersTotal,
  setShowFavorites,
  setLoading,
  searchValue,
  loading,
}) {
  return (
    <Container>
      <TotalsTypography>
        Encontrados {characterTotals ?? 0} heróis
      </TotalsTypography>
      <div className="filtersContainer">
        <FilterByName
          setCharacterList={setCharacterList}
          searchValue={searchValue}
          setCharactersTotal={setCharactersTotal}
          setLoading={setLoading}
          loading={loading}
        />
        <FilterByFavorites setShowFavorites={setShowFavorites} />
      </div>
    </Container>
  );
}

export default ListFilters;
