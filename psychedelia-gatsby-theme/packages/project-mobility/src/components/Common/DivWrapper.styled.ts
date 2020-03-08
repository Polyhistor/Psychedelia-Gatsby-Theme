import styled from "styled-components";
import { fadeInInterpolated, scale } from "../../styles/animations";

export const StyledDivWrapper = styled.div`
  ${({ animation }) => (animation === "fadeIn" ? fadeInInterpolated : null)};
  position: ${({ position }) => (position ? `${position}` : null)};
  padding: ${({ padding }) => (padding ? `${padding}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  display: ${({ display }) => `${display}`};
  align-items: ${({ alignItems }) =>
    alignItems ? `${alignItems}` : "inherit"};
  border: ${({ border, theme }) =>
    border === "bordered" ? `1px solid ${theme.silverChalic}` : null};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : null};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : null)};
  overflow: ${({ overflow }) => (overflow ? `${overflow}` : null)};
  grid-template-columns: ${({ gridColumns }) =>
    gridColumns ? `${gridColumns}` : null};

  &:hover {
    ${({ hover }) => (hover === "scale" ? scale : null)}
  }
`;

export const ULWrapper = styled.ul``;
