import styled from "styled-components";

import Typography from "../Typography";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 5rem;
  align-items: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 2rem;
  }

  button.logoContainer {
    display: flex;
    gap: 1rem;
    align-items: center;
    border: none;
    background-color: transparent;

    img {
      height: 5rem;
    }
  }

  .inputContainer {
    display: flex;

  }
`;

export const LogoTypography = styled(Typography.SubtitleDark)`
    font-size: ${({ theme }) => theme.FONT.SIZE.XXS}px;
`;
