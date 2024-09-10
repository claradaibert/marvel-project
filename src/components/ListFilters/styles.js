import styled from "styled-components";

import Typography from "../Typography";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }

  .filtersContainer {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
    }

    button.orderListButtonContainer {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      gap: 0.5rem;

      img {
        height: 1.2rem;
      }
    }
  }
`;

export const TotalsTypography = styled(Typography.BodyLight)``;

export const OrderListTypography = styled(Typography.SmallBodyPrimary)``;
