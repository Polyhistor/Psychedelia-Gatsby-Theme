import React, { useState } from "react";
import { Link } from "gatsby";

// Components
import {
  StyledNavigation,
  StyledNavigationWrapper,
  StyledUlList,
  StyledLiList
} from "./Navigation.styled";
import { NavigationLabels } from "../../interfaces/navigation";
import { ToolTip } from "../Common/ToolTip";

// Helpers
import { NavigationParser } from "../../helpers/navigationParser";

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
        <StyledUlList align="center" fontWeight="500">
          {NavigationParser(websiteConfigData).map(
            (e: NavigationLabels, idx: number) => (
              <StyledLiList
                padding="0 1.6rem"
                animation="fontScale"
                onMouseEnter={() => setID(idx)}
                key={idx}
              >
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
                    <StyledUlList direction="column" align="start">
                      {e.subs.map((sub, idx) => (
                        <StyledLiList
                          marginBottom="1.6rem"
                          animation="fontScale"
                          key={idx}
                        >
                          <Link to={sub.link}>{sub.label}</Link>
                        </StyledLiList>
                      ))}
                    </StyledUlList>
                  </ToolTip>
                ) : null}
              </StyledLiList>
            )
          )}
        </StyledUlList>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
