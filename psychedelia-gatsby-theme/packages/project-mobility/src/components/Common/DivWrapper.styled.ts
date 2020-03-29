import styled from "styled-components";
import {  scale } from "../../styles/animations";

export const StyledDivWrapper = styled.div`
  position: ${({ position }) => (position ? `${position}` : null)};
  background: ${({ background }) => (background ? `${background}` : null)};
  padding: ${({ padding }) => (padding ? `${padding}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  direction: ${({ direction }) => (direction === "right" ? `rtl` : null)};
  display: ${({ display }) => `${display}`};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? `${flexDirection}` : null};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : null};
  align-items: ${({ alignItems }) =>
    alignItems ? `${alignItems}` : "inherit"};
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns ? `${gridTemplateColumns}` : "inherit"};
  border-top: ${({ borderTop }) => (borderTop ? `${borderTop}` : null)};
  border-right: ${({ borderRight }) => (borderRight ? `${borderRight}` : null)};
  border: ${({ border, theme }) =>
    border === "bordered"
      ? `1px solid ${theme.silverChalic}`
      : border === "thick-bordered"
      ? `11px solid ${theme.babyPowder}`
      : border};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : null};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : null)};
  overflow: ${({ overflow }) => (overflow ? `${overflow}` : null)};
  grid-template-columns: ${({ gridColumns }) =>
    gridColumns ? `${gridColumns}` : null};
  width: ${({ width }) => (width ? `${width}` : null)};
  grid-column-gap: ${({ gridColumnGap }) =>
    gridColumnGap ? `${gridColumnGap}` : null};
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : null)};
  top: ${({ top }) => (top ? `${top}` : null)};
  grid-gap: ${({ gridGap }) => (gridGap ? `${gridGap}` : null)};

  &:hover {
    ${({ hover }) => (hover === "scale" ? scale : null)}
  }
`;

export const ULWrapper = styled.ul``;
