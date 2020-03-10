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
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : null)};
  color: ${({ color, theme }) =>
    color === "blue" ? `${theme.blueCrayola}` : null};
  border: ${({ border }) => (border ? `${border}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  padding: ${({ padding }) => (padding ? `${padding}` : null)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : null)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : null)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : null)};
  border-top: ${({ borderTop }) => (borderTop ? `${borderTop}` : null)};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `${borderBottom}` : null};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : null};
  direction: ${({ direction }) => (direction === "right" ? "ltr" : null)};
`;

export const P = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  direction: ${({ direction }) => (direction === "right" ? "ltr" : null)};
`;
