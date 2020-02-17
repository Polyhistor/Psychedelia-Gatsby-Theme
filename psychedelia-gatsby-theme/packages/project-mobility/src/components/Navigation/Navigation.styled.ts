import styled from "styled-components";

export const StyledNavigationWrapper = styled.div`
  max-width: 160rem;
  margin: 0 auto;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 5%;
`;

export const StyledUlList = styled.ul`
  display: flex;
  margin-left: auto;
  min-height: 8rem;
  align-items: center;
  font-weight: 500;

  & > li {
    padding: 0 1.6rem;
    color: ${({ theme }) => theme.primaryDark};
    list-style: none;
    font-size: 2rem;
    text-transform: uppercase;
  }
`;
