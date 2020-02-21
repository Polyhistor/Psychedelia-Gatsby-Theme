import React from "react";
import {
  StyledNavigation,
  StyledNavigationWrapper,
  StyledUlList
} from "./Navigation.styled";
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";
import { NavigationLabels } from "../../interfaces/navigation";
import { NavigationParser } from "../../helpers/navigationParser";
import Logo from "../Logo";

const Navigation = () => {
  const websiteConfigData = useSiteConfigQuery();

  console.log(NavigationParser(websiteConfigData));

  return (
    <StyledNavigationWrapper>
      <StyledNavigation>
        <Logo />
        <StyledUlList>
          {NavigationParser(websiteConfigData).map(
            (e: NavigationLabels, idx: number) => (
              <li key={idx}>{e.label}</li>
            )
          )}
        </StyledUlList>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
