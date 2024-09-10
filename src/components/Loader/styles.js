import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: ${(props) => (props.padding ? props.padding : "5rem 2rem")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: opacity 0.75s, visibility 0.75s;
  overflow-y: hidden;

  &::after {
    content: "";
    width: ${(props) => (props.size ? props.size : "2rem")};
    height: ${(props) => (props.size ? props.size : "2rem")};
    border: 3px solid ${({ theme }) => theme.COLORS.TYPOGRAPHY.LIGHT};
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
