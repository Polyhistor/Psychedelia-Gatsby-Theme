import React from "react";

// Components
import Layout from "../layouts/layout";
import ProductsBox from "../components/ProductBox/ProductBox";
import { StyledSectionWrapper, StyledDivWrapper } from "../components/Common";

// Helpers
import useProducts from "../queries/useProducts";

const Products = () => {
  const productsData = useProducts();

  return (
    <Layout>
      <StyledSectionWrapper padding="8rem 10em">
        <StyledDivWrapper
          display="grid"
          gridColumns="33% 33% 33%"
          margin="8rem 0 0 0"
        >
          {productsData.map((p, i) => (
            <ProductsBox
              title={p.node.productTitle}
              price={p.node.productSubtitle}
              banner={p.node.productBannerImage.localFile.childImageSharp.fluid}
              slug={p.node.slug}
            ></ProductsBox>
          ))}
        </StyledDivWrapper>
      </StyledSectionWrapper>
    </Layout>
  );
};

export default Products;
