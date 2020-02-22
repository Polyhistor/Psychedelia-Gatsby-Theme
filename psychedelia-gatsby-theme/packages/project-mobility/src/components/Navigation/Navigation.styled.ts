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
  flex-direction: ${({ direction }) => (direction ? `${direction}` : "row")};
  margin-left: auto;
  padding-left: 0;
  align-items: ${({ align }) => `${align}`};
  font-weight: 500;

  & > li {
    padding: ${({ liPadding }) => liPadding};
    list-style: none;
    font-size: 2rem;
    text-transform: uppercase;

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.primaryDark};
    }
  }
`;
