import styled from "styled-components";
import { StyledDivWrapper } from "./DivWrapper.styled";

export const StyledToolTip = styled(StyledDivWrapper)`
  &::before {
    content: "";
    display: block;
    position: absolute;
    border-width: 0.6rem;
    border-style: solid;
    border-color: transparent transparent black transparent;
    top: -1.2rem;
    left: 10%;
  }
`;
