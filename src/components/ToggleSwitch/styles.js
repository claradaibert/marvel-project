import styled from "styled-components";

export const Container = styled.label`
  position: relative;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + span {
    background-color: #dedede;
    border: 1px solid #dedede;
    opacity: 1;

    &::before {
      left: 20px;
    }
  }
`;

export const SwitchBase = styled.span`
  display: flex;
  cursor: pointer;
  width: 40px;
  height: 24px;
  border-radius: 40px;
  background-color: #dedede;
  border: 1px solid #dedede;
  position: relative;
  transition: background-color 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    transition: 0.2s;
    background: ${({ theme }) => theme.COLORS.BRAND.PRIMARY};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.COLORS.BRAND.PRIMARY};
    z-index: 1;
  }
`;
