import styled from "styled-components";
import { fontScale, borderBottom } from "../../styles/animations";

export const StyledNavigationWrapper = styled.div`
  max-width: 160rem;
  margin: 0 auto;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 5%;
  background-color: ${({ background, theme }) => theme[background]};
`;

export const StyledUlList = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : "row")};
  margin-left: auto;
  padding-left: 0;
  align-items: ${({ align }) => `${align}`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
`;

export const StyledLiList = styled.li`
  padding: ${({ padding }) => padding};
  list-style: none;
  font-size: 2rem;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? `${marginBottom}` : null};
  }

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.errieBlack};

    &:hover {
      ${({ animation }) =>
        animation === "fontScale"
          ? fontScale
          : animation === "borderBottom"
          ? borderBottom
          : null}
    }
  }
`;
