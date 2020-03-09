import React from "react";

// Components
import FeatureBox from "../FeatureBox/FeatureBox";
import { StyledSectionWrapper, StyledDivWrapper } from "../Common";

// Queries
import useFeatureBox from "../../queries/useFeatureBox";

const FeatureBoxContainer = () => {
  const featureBoxData = useFeatureBox();
  console.log(featureBoxData);

  return (
    <StyledSectionWrapper padding="0 10rem">
      {featureBoxData
        .sort((a, b) => a.node.contentfulid - b.node.contentfulid)
        .map(({ node }, i) => (
          <FeatureBox
            key={i}
            title={node.title}
            subtitle={node.subtitle}
            description={node.description.description}
            banner={node.banner.localFile.childImageSharp.fluid}
            direction={node.orientation}
          ></FeatureBox>
        ))}
    </StyledSectionWrapper>
  );
};

export default FeatureBoxContainer;
