import React from "react";
import { Link } from "gatsby";

// Component
import { StyledImage } from "../Common/Image.styled";

// Queries
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";

// TODO - WRITE TESTS
const Logo = () => {
  const websiteConfigData = useSiteConfigQuery();

  return (
    <Link to="/">
      <StyledImage
        url={websiteConfigData[0].node.logo.file.url}
        alt="Mobility Aid Logo"
        width="22rem"
        height="auto"
      ></StyledImage>
    </Link>
  );
};

export default Logo;
