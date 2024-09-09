import styled from "styled-components";

import Typography from "../Typography";

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;

  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  li {
    display: flex;
    flex-direction: column;

    .imgContainer {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      height: 16rem;
      width: 100%;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.BRAND.PRIMARY};

      img {
        transition: 400ms;
        width: 100%;
        height: 100%;
        min-width: 100%;
        min-height: 100%;

        &:hover {
          height: 110%;
          width: 150%;
        }
      }
    }

    .nameContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 1.5rem 0;
      align-items: center;

      button {
        display: flex;
        border: none;
        background-color: transparent;
      }
    }
  }
`;

export const CharName = styled(Typography.BodyBold)``;
