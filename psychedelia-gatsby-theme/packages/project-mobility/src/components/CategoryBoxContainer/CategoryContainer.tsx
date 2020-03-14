import React from "react";

// Components
import { StyledSectionWrapper, StyledDivWrapper } from "../Common";
import CategoryBox from "../CategoryBox/CategoryBox";

// Queries
import useCategoryBox from "../../queries/useCategoryBox";

const CategoryContainer = () => {
  const categoryContainerData = useCategoryBox();

  return (
    <StyledSectionWrapper padding="0 10rem" margin="6rem 0">
      <StyledDivWrapper display="flex">
        {categoryContainerData.map((e, i) => (
          <CategoryBox
            key={i}
            title={e.node.title}
            description={e.node.description}
            banner={e.node.banner.localFile.childImageSharp.fluid}
          ></CategoryBox>
        ))}
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default CategoryContainer;
