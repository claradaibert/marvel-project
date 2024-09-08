import styled from "styled-components";

import Typography from "../Typography";

export const HomeTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const HomeTitleTypography = styled(Typography.TitleDark)`
  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.FONT.SIZE.MD}px;
  }

  @media screen and (max-width: 310px) {
    font-size: ${({ theme }) => theme.FONT.SIZE.SM}px;
  }
`;

export const HomeSubtitle = styled(Typography.SubtitleLight)`
  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.FONT.SIZE.US}px;
  }
`;
