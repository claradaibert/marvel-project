import React from "react";

// Style import
import { InputContainer } from "./style";

import SearchIcon from "../../assets/ic_busca.svg";

function Input({ maxWidth, type, value, setValue }) {
  return (
    <InputContainer maxWidth={maxWidth} type={type}>
      <div className="inputAndLabelContainer">
        <div className="iconContainer">
          <img src={SearchIcon} alt="search icon" />
        </div>
        <input
          placeholder="Procure por heróis"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </InputContainer>
  );
}

export default Input;
