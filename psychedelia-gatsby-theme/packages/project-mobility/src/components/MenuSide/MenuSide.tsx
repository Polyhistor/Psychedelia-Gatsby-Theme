import React from "react";
import { Link } from "gatsby";

// Components
import { StyledMenuSide } from "./MenuSide.styled";
import {
  StyledNavigation,
  StyledUlList,
  StyledLiList
} from "../Navigation/Navigation.styled";
import { NavigationLabels } from "../../interfaces/navigation";
import { StyledDivWrapper } from "../Common/DivWrapper.styled";

// Interfaces
import { OpenerProps } from "../../interfaces/navigation";

// Helpers
import { NavigationParser } from "../../helpers/navigationParser";
import HeaderContext from "../../contexts/headerContext";

// Configs
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";

const MenuSide = ({ open, setOpen }: OpenerProps): JSX.Element => {
  const websiteConfigData = useSiteConfigQuery();
  const [headerContext] = HeaderContext.useHeaderContext();

  return (
    <StyledMenuSide open={headerContext}>
      <StyledNavigation>
        <StyledUlList direction="column">
          {NavigationParser(websiteConfigData).map(
            (e: NavigationLabels, idx: number) => (
              <StyledLiList padding={"1.5rem 0"} key={idx}>
                <Link to={e.link}>{e.label}</Link>
                {e.subs ? (
                  <StyledDivWrapper maxHeight="0" overflow="hidden">
                    <StyledUlList direction="column" align="start">
                      {e.subs.map((sub, idx) => (
                        <StyledLiList key={idx}>
                          <Link to={sub.link}>{sub.label}</Link>
                        </StyledLiList>
                      ))}
                    </StyledUlList>
                  </StyledDivWrapper>
                ) : null}
              </StyledLiList>
            )
          )}
        </StyledUlList>
      </StyledNavigation>
    </StyledMenuSide>
  );
};

export default MenuSide;
