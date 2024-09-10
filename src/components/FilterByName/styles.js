import styled from "styled-components";

import Typography from "../Typography";

export const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 0.5rem;

  img {
    height: 1.2rem;
  }
`;

export const OrderListTypography = styled(Typography.SmallBodyPrimary)``;
