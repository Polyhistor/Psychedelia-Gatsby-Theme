import React from "react";
import { StyledNavigation, StyledNavigationWrapper } from "./Navigation.styled";
import useSiteConfigQuery from "../../queries/siteConfigQuery";

const Navigation = () => {
  const websiteConfigData = useSiteConfigQuery();

  console.log(websiteConfigData);

  return (
    <StyledNavigationWrapper>
      <StyledNavigation></StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
