import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.COLORS.CHARACTER.BACKGROUND};
  min-height: 110vh;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .backgroundName {
    position: fixed;
    margin-top: 5rem;
    z-index: 0;
    max-width: 80vw;
    text-align: right;
    right: 1rem;
    font-size: 200px;
    color: ${({ theme }) => theme.COLORS.CHARACTER.FONT};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.G};
  }

  .mainContentContainer {
    z-index: 1000;
    display: flex;
    flex-direction: column;
  }
`;
