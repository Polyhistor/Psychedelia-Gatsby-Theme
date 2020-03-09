import React from "react";
import { StyledSectionWrapper, StyledDivWrapper } from "../Common";
import CategoryBox from "../CategoryBox/CategoryBox";

// Queries
import useCategoryBox from "../../queries/useCategoryBox";

const ProductsContainer = () => {
  const productsContainerData = useCategoryBox();

  return (
    <StyledSectionWrapper padding="0 10rem" margin="6rem 0">
      <StyledDivWrapper display="flex">
        {productsContainerData.map((e, i) => (
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

export default ProductsContainer;
