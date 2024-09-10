import styled from "styled-components";

import Typography from "../Typography";

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40%;
  align-items: flex-start;

  @media screen and (max-width: 830px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  .nameContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
      border: none;
      background-color: transparent;
    }
  }

  .mediaInfoContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }

  .characterRating {
    display: flex;
    align-items: center;
    gap: 1rem;

    .stars {
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }
`;

export const CharacterName = styled(Typography.PageTitle)`
  text-align: left;
`;

export const CharacterDescription = styled(Typography.BodyLight)`
  text-align: left;
  line-height: 1.8rem;
`;

export const MediaInfoTitleTypography = styled(Typography.BodyBold)`
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.MEDIUM};
`;
