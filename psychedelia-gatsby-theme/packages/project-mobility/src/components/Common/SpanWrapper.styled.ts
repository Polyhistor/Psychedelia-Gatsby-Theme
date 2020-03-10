import styled from "styled-components";

// TODO - do a complete type checking
// TODO - create an index for this folder so files can be easily imported

export const StyledSpanWrapper = styled.span`
  color: ${({ color, theme }) =>
    color === "blue" ? `${theme.blueCrayola}` : null};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : null)};
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  padding: ${({ padding }) => (padding ? `${padding}` : null)};
  transform: ${({ transform }) => (transform ? `${transform}` : null)};
`;
