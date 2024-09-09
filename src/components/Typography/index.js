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

const Typography = {
  TitleDark,
  SubtitleDark,
  BodyLight,
  BodyDark,
  BodyBold,
};

export default Typography;
