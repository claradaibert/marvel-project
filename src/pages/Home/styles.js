import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  button.moreLoadingButton {
    width: 100%;
    border: none;
    height: fit-content;
    padding: 1.5rem;
    border-radius: 3rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.BRAND.PRIMARY};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.G};
    background-color: ${({ theme }) => theme.COLORS.BRAND.PRIMARY_PASTEL};
  }
`;
