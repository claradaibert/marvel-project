import React, { useState } from "react";

// Style import
import { Container, OrderListTypography } from "./styles";

// Asset import
import HeroIcon from "../../assets/ic_heroi.svg";

// Component import
import ToggleSwitch from "../ToggleSwitch";

function FilterByName({ setCharacterList }) {
  const [filterEnabled, setFilterEnabled] = useState(false);

  const handleToggle = () => {
    // fazer req
    setFilterEnabled((prev) => !prev);
  };

  return (
    <Container type="button" onClick={() => handleToggle()}>
      <img src={HeroIcon} alt="Hero Icon" />
      <OrderListTypography>Ordernar por nome - A/Z</OrderListTypography>
      <ToggleSwitch
        toggleIsSwitched={filterEnabled}
        handleToggleSwitch={() => handleToggle()}
      />
    </Container>
  );
}

export default FilterByName;
