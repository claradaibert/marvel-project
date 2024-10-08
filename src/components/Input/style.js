import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "60vw")};

  @media screen and (max-width: 900px) {
    max-width: 80vw;
  }

  .inputAndLabelContainer {
    width: 100%;
    display: flex;
    align-items: center;

    .iconContainer {
      position: relative;
      width: 0;
      overflow-x: visible;
      left: 2.5rem;
      z-index: 20000;

      img.iconContainerImg {
        height: 1.2rem;
      }
    }

    input {
      border: none;
      background-color: ${(props) =>
        props.type === "primary"
          ? `${props.theme.COLORS.BRAND.PRIMARY_PASTEL}`
          : `${props.theme.COLORS.BRAND.LIGHT}`};
      padding: 1.2rem 1.5rem 1.2rem 4.5rem;
      font-size: 1rem;
      border-radius: 3rem;
      width: 100%;

      &::placeholder {
        color: ${(props) =>
          props.type === "primary"
            ? `${props.theme.COLORS.BRAND.PRIMARY}`
            : `${props.theme.COLORS.TYPOGRAPHY.LIGHT}`};
        font-weight: ${({ theme }) => theme.FONT.WEIGHT.M};
      }
    }
  }
`;
