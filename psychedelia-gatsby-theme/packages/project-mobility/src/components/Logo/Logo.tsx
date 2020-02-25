import React from "react";

// Component
import { StyledLogo } from "./Logo.styled";

// Config
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";

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
