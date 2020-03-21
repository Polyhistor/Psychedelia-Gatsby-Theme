import styled from "styled-components";

export const H1 = styled.h1`
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : null)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : null)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : null)};
  text-transform: ${({ textTransform }) =>
    textTransform ? `${textTransform}` : null};
`;

export const H2 = styled.h2`
  color: ${({ color, theme }) =>
    color === "blue" ? `${theme.blueCrayola}` : null};
  border: ${({ border }) => (border ? `${border}` : null)};
  display: ${({ display }) => (display ? `${display}` : null)};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  padding: ${({ padding }) => (padding ? `${padding}` : null)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : null)};
  text-transform: ${({ textTransform }) => (textTransform ? `${textTransform}` : null)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : null)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : null)};
  border-top: ${({ borderTop }) => (borderTop ? `${borderTop}` : null)};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `${borderBottom}` : null};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : null};
  direction: ${({ direction }) => (direction === "right" ? "ltr" : null)};
  text-decoration: ${({ textDecoration }) => (textDecoration ? `${textDecoration}` : null)};
`;

export const P = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  direction: ${({ direction }) => (direction === "right" ? "ltr" : null)};
`;


