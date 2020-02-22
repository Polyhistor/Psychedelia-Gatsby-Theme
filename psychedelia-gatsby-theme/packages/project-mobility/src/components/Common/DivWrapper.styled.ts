import styled from "styled-components";
import { fadeInInterpolated } from "../../styles/animations";

export const StyledDivWrapper = styled.div`
  ${({ animation }) => (animation === "fadeIn" ? fadeInInterpolated : null)};
  position: ${({ position }) => (position ? `${position}` : null)};
  padding: ${({ padding }) => (padding ? `${padding}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  display: ${({ display }) => (display ? `${display}` : "inherit")};
  border: ${({ border, theme }) =>
    border === "bordered" ? `1px solid ${theme.lightGray}` : null};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : null};
`;

export const ULWrapper = styled.ul``;
