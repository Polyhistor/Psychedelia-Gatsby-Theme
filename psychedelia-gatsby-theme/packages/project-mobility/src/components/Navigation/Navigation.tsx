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
import { ToolTip } from "../Common/ToolTip";

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
        <StyledUlList
          align="center"
          liPadding="0 1.6rem"
          fontWeight="500"
          liAnimation="scale"
        >
          {NavigationParser(websiteConfigData).map(
            (e: NavigationLabels, idx: number) => (
              <li onMouseEnter={() => setID(idx)} key={idx}>
                <Link to={e.link}>{e.label}</Link>
                {e.subs ? (
                  <ToolTip
                    display={idx === ID ? "block" : "none"}
                    border="bordered"
                    position="absolute"
                    borderRadius="1rem"
                    padding="2rem"
                    margin="1.5rem 0 0 0"
                    animation="fadeIn"
                    toolTip={true}
                    onMouseLeave={() => setID(400)}
                  >
                    <StyledUlList
                      direction="column"
                      align="start"
                      marginBottom="1.6rem"
                    >
                      {e.subs.map((sub, idx) => (
                        <li key={idx}>
                          <Link to={sub.link}>{sub.label}</Link>
                        </li>
                      ))}
                    </StyledUlList>
                  </ToolTip>
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
