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

const SubtitleLight = styled.p`
  font-size: ${({ theme }) => theme.FONT.SIZE.XXS}px;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.M};
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.LIGHT};
`;

const Typography = {
  TitleDark,
  SubtitleDark,
  SubtitleLight
};

export default Typography;
