import styled from "styled-components";

export const StyledSectionWrapper = styled.section`
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
  padding: ${({ padding }) => (padding ? `${padding}` : null)};
`;
