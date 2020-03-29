import styled from "styled-components";

// TODO - do a complete type checking
// TODO - create an index for this folder so files can be easily imported

export const StyledSpanWrapper = styled.span`
  display: ${({ display }) => (display ? `${display}` : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : null)};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : null};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : null)};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `${borderBottom}` : null};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : null)};
  color: ${({ color, theme }) =>
    color === "blue" ? `${theme.blueCrayola}` : color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  padding: ${({ padding }) => (padding ? `${padding}` : null)};
  transform: ${({ transform }) => (transform ? `${transform}` : null)};
  text-transform: ${({ textTransform }) => (textTransform ? `${textTransform}` : null)};
  text-decoration: ${({ textDecoration }) => (textDecoration ? `${textDecoration}` : null)};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : null)};
  cursor: ${({ cursor }) => (cursor ? `${cursor}` : null)};
  ${({ hover }) => (hover ? `&:hover { ${hover} }` : null)}
`;
