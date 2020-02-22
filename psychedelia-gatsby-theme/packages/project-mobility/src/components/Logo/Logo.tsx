import React from "react";
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";
import { StyledLogo } from "./Logo.styled";

// TODO - WRITE TESTS

const Logo = () => {
  const websiteConfigData = useSiteConfigQuery();

  return (
    <span>
      <StyledLogo
        url={websiteConfigData[0].node.logo.file.url}
        alt="Mobility Aid Logo"
      ></StyledLogo>
    </span>
  );
};

export default Logo;
