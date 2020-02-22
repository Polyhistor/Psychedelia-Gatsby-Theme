import React, { useState } from "react";
import { Link } from "gatsby";

// Components
import {
  StyledNavigation,
  StyledNavigationWrapper,
  StyledUlList
} from "./Navigation.styled";
import { NavigationLabels } from "../../interfaces/navigation";
import { NavigationParser } from "../../helpers/navigationParser";
import { StyledDivWrapper } from "../Common/DivWrapper.styled";

// Assessts
import Logo from "../Logo";

// Configs
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";

const Navigation = () => {
  const websiteConfigData = useSiteConfigQuery();
  const [ID, setID] = useState();

  return (
    <StyledNavigationWrapper>
      <StyledNavigation>
        <Logo />
        <StyledUlList align="center" liPadding="0 1.6rem">
          {NavigationParser(websiteConfigData).map(
            (e: NavigationLabels, idx: number) => (
              <li
                onMouseEnter={() => setID(idx)}
                onMouseLeave={() => setID(4)}
                key={idx}
              >
                <Link to={e.link}>{e.label}</Link>
                {e.subs ? (
                  <StyledDivWrapper
                    display={idx === ID ? "block" : "none"}
                    border="bordered"
                    position="absolute"
                    borderRadius="0.4rem"
                    padding="2rem"
                    margin="1.5rem 0 0 0"
                    animation="fadeIn"
                  >
                    <StyledUlList direction="column" align="start">
                      {e.subs.map((sub, idx) => (
                        <li key={idx}>
                          <Link to={sub.link}>{sub.label}</Link>
                        </li>
                      ))}
                    </StyledUlList>
                  </StyledDivWrapper>
                ) : null}
              </li>
            )
          )}
        </StyledUlList>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
