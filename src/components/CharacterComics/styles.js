import styled from "styled-components";

import Typography from "../Typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4rem;
  gap: 2rem;

  .comicsList {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 11rem));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;

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
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
        }
      }

      .nameContainer {
        padding: 0.5rem 0;
      }
    }
  }
`;

export const Title = styled(Typography.PageTitle)`
  font-size: ${({ theme }) => theme.FONT.SIZE.MD}px;
`;

export const ComicDescription = styled(Typography.BodyLight)`
  text-align: left;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.COLORS.TYPOGRAPHY.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.G};
`;
