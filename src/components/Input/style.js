import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "60vw")};

  .inputAndLabelContainer {
    width: 100%;
    display: flex;
    align-items: center;

    .iconContainer {
      width: 0;
      position: relative;
      left: 1.5rem;

      img {
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
