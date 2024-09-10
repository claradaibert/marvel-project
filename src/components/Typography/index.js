import styled from "styled-components";

const TitleDark = styled.p`
  font-size: ${({ theme }) => theme.FONT.SIZE.LG}px;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.XG};
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.DARK};
`;

const SubtitleDark = styled.p`
  font-size: ${({ theme }) => theme.FONT.SIZE.XS}px;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.G};
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.DARK};
`;

const BodyLight = styled.p`
  font-size: ${({ theme }) => theme.FONT.SIZE.XXS}px;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.M};
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.LIGHT};

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.FONT.SIZE.US}px;
  }
`;

const BodyDark = styled.p`
  font-size: ${({ theme }) => theme.FONT.SIZE.XXS}px;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.M};
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.DARK};
`;

const BodyBold = styled.p`
  font-size: ${({ theme }) => theme.FONT.SIZE.XXS}px;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.XG};
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.DARK};
`;

const SmallBodyPrimary = styled.p`
  font-size: ${({ theme }) => theme.FONT.SIZE.US}px;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.M};
  color: ${({ theme }) => theme.COLORS.BRAND.PRIMARY};
`;

const Typography = {
  TitleDark,
  SubtitleDark,
  BodyLight,
  BodyDark,
  BodyBold,
  SmallBodyPrimary,
};

export default Typography;
