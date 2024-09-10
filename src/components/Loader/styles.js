import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: opacity 0.75s, visibility 0.75s;

  &::after {
    content: "";
    width: 2rem;
    height: 2rem;
    border: 7px solid ${({ theme }) => theme.COLORS.BRAND.MEDIUM};
    border-top-color: ${({ theme }) => theme.COLORS.BRAND.PRIMARY};
    border-radius: 50%;
    animation: loading 0.75s ease infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
`;
