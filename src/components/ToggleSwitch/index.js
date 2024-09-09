import React from "react";

// Style import
import { Container, Input, SwitchBase } from "./styles";

function ToggleSwitch({ toggleIsSwitched , handleToggleSwitch}) {

  return (
    <Container>
      <Input type="checkbox" checked={toggleIsSwitched} onChange={handleToggleSwitch}/>
      <SwitchBase />
    </Container>
  );
}

export default ToggleSwitch;
