import React from "react";
import {
  StyledNavigation,
  StyledNavigationWrapper,
  StyledUlList
} from "./Navigation.styled";
import useSiteConfigQuery from "../../queries/siteConfigQuery";
import { NavigationLabels } from "../../interfaces/navigation";
import { NavigationParser } from "../../helpers/navigationParser";

const Navigation = () => {
  const websiteConfigData = useSiteConfigQuery();

  return (
    <StyledNavigationWrapper>
      <StyledNavigation>
        <StyledUlList>
          {NavigationParser(websiteConfigData).map((e: NavigationLabels) => (
            <li>{e.label}</li>
          ))}
        </StyledUlList>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
