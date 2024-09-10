import styled from "styled-components";

import Typography from "../Typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    border: none;
    background-color: transparent;
  }
`;

export const CharacterName = styled(Typography.PageTitle)`
  text-align: left;
  max-width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
