import styled from "styled-components";
import { fontScale, borderBottom } from "../../styles/animations";
import media from "styled-media-query";

export const StyledNavigationWrapper = styled.div`
  max-width: 160rem;
  margin: 0 auto;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 5%;
  background-color: ${({ background, theme }) => theme[background]};
  ${media.lessThan("medium")`
    justify-content: space-between 
  `}
`;

export const StyledUlList = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : "row")};
  margin-left: auto;
  padding-left: 0;
  align-items: ${({ align }) => `${align}`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};

  ${media.lessThan("medium")`
   ${({ mobile }) => (mobile ? "display:none" : null)}
  `}
`;

export const StyledLiList = styled.li`
  display: ${({ display }) => (display ? `${display}` : null)};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : null)};
  padding: ${({ padding }) => padding};
  list-style: ${({ listStyle }) => (listStyle ? `${listStyle}` : "none")};
  font-size: 2rem;
  text-transform: ${({ textTransform }) =>
    textTransform ? `${textTransform}` : null};

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
