import React from "react";

// Components
import { StyledSectionWrapper, StyledDivWrapper, H2 } from "../Common";

const ProductsInfo = ({
  titles,
  description,
  specification,
  productDimensions,
  images
}) => {
  console.log(titles);
  console.log(description);
  console.log(specification);
  console.log(productDimensions);
  console.log(images);

  return (
    <StyledSectionWrapper padding="0 16rem">
      <StyledDivWrapper display="grid" gridTemplateColumns="50% 50%">
        <StyledDivWrapper>
        <StyledDivWrapper>
          {titles.map((title, i) => (
            <H2 as="h3" key={i}>
              {title}
            </H2>
          ))}
          </StyledDivWrapper>
        </StyledDivWrapper>
        <StyledDivWrapper>test</StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default ProductsInfo;
