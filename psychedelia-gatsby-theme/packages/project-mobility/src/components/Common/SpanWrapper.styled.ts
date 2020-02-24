import styled from "styled-components";

// TODO - do a complete type checking
// TODO - create an index for this folder so files can be easily imported

export const StyledSpanWrapper = styled.span`
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
`;
