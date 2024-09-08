import styled from "styled-components";

import Typography from "../Typography";

export const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: baseline;

  img {
    @media screen and (max-width: 420px) {
      height: 100px;
    }

    @media screen and (max-width: 320px) {
      height: 80px;
    }
  }
`;

export const HeaderSubtitle = styled(Typography.SubtitleDark)`
  position: relative;
  right: 110px;
  bottom: 25px;
  width: 0;
  white-space: nowrap;

  @media screen and (max-width: 420px) {
    font-size: ${({ theme }) => theme.FONT.SIZE.US}px;
    right: 100px;
    bottom: 20px;
  }

  @media screen and (max-width: 320px) {
    right: 80px;
    bottom: 18px;
  }
`;
