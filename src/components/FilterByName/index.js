import React from "react";

// Style import
import { Container, OrderListTypography } from "./styles";

// Asset import
import HeroIcon from "../../assets/ic_heroi.svg";

// Component import
import ToggleSwitch from "../ToggleSwitch";

function FilterByName({
  loading,
  characterOrder,
  setCharacterOrder,
}) {
  const handleToggle = async () => {
    setCharacterOrder((prev) => {
      if (prev === "name") {
        return "modified";
      }
      return "name";
    });
  };

  return (
    <Container type="button" onClick={() => handleToggle()} disabled={loading}>
      <img src={HeroIcon} alt="Hero Icon" />
      <OrderListTypography>Ordernar por nome - A/Z</OrderListTypography>
      <ToggleSwitch
        toggleIsSwitched={characterOrder === "name"}
        handleToggleSwitch={() => handleToggle()}
      />
    </Container>
  );
}

export default FilterByName;
