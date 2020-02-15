import styled from "styled-components";

export const StyledNavigationWrapper = styled.div`
  max-width: 160rem;
  margin: 0 auto;
`;

export const StyledNavigation = styled.nav`
  padding: 0 5%;
`;

export const StyledUlList = styled.ul`
  display: flex;
  margin-right: auto;
  min-height: 8rem;
  align-items: center;
  font-weight: 500;

  & > li {
    padding: 0 1.6rem;
    color: white;
    list-style: none;
    font-size: 2rem;
    text-transform: uppercase;
  }
`;
