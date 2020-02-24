import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import { Add } from "grommet-icons";

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

// Configs
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";

const MenuSide = ({ open, setOpen }: OpenerProps): JSX.Element => {
  const websiteConfigData = useSiteConfigQuery();

  const [sub, setSub] = useState(false);

  return (
    <StyledMenuSide open={open}>
      <StyledNavigation>
        <StyledUlList direction="column">
          {NavigationParser(websiteConfigData).map(
            (e: NavigationLabels, idx: number) => (
              <StyledLiList key={idx}>
                {e.subs ? (
                  <StyledDivWrapper display="flex" alignItems="center">
                    <Add size="medium" />
                    <Link to={e.link}>{e.label}</Link>
                  </StyledDivWrapper>
                ) : (
                  <StyledDivWrapper display="flex" alignItems="center">
                    <Link to={e.link}>{e.label}</Link>
                  </StyledDivWrapper>
                )}
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
