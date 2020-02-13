import React from "react";
import {
  StyledNavigation,
  StyledNavigationWrapper,
  StyledUlList
} from "./Navigation.styled";
import useSiteConfigQuery from "../../queries/siteConfigQuery";

const Navigation = () => {
  const websiteConfigData = useSiteConfigQuery();
  const parsedObjects = [];

  console.log(websiteConfigData);

  const renderLabels = () =>
    websiteConfigData[0].node.navigationLabels
      .map(e => parsedObjects.push(JSON.parse(e.internal.content)))
      .map((e, i) => <li key={i}>{e.label}</li>);

  console.log(parsedObjects);

  return (
    <StyledNavigationWrapper>
      <StyledNavigation>
        <StyledUlList>{renderLabels()}</StyledUlList>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
