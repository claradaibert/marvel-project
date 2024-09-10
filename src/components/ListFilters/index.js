import React from "react";

// Style import
import { Container, TotalsTypography } from "./styles";

// Asset import
import FilterByName from "../FilterByName";
import FilterByFavorites from "../FilterByFavorites";

function ListFilters({
  characterTotals,
  setShowFavorites,
  loading,
  characterOrder,
  setCharacterOrder,
}) {
  return (
    <Container>
      <TotalsTypography>
        Encontrados {characterTotals ?? 0} heróis
      </TotalsTypography>
      <div className="filtersContainer">
        <FilterByName
          loading={loading}
          characterOrder={characterOrder}
          setCharacterOrder={setCharacterOrder}
        />
        <FilterByFavorites setShowFavorites={setShowFavorites} />
      </div>
    </Container>
  );
}

export default ListFilters;
