import styled from "styled-components";
import Typography from "../Typography";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .details {
      display: flex;
      align-items: flex-end;
      gap: 0.5rem;
    }
`;

export const MediaInfoTitleTypography = styled(Typography.BodyBold)`
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.MEDIUM};
`;

export const MediaInfoTypography = styled(Typography.BodyDark)`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.S};
`;
