import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../layouts/layout";
import BannerProducts from "../components/BannerProducts/BannerProducts";
import ProductsInfo from "../components/ProductsInfo/ProductsInfo";

const Products = ({ data, pageContext }) => {
  return (
    <Layout>
      <BannerProducts
        title={data.contentfulProducts.productTitle}
        banner={
          data.contentfulProducts.productBannerImage.localFile.childImageSharp
            .fluid
        }
      ></BannerProducts>
      <ProductsInfo
        titles={Object.keys(data.contentfulProducts).slice(2, 5)}
        information={[
         [ data.contentfulProducts.productDescription.productDescription,
          data.contentfulProducts.productSpecification.productSpecification,
          data.contentfulProducts.productDimension.productDimension],
          data.contentfulProducts.gallery
        ]}
      ></ProductsInfo>
    </Layout>
  );
};

export default Products;

export const query = graphql`
  query($slug: String!) {
    contentfulProducts(slug: { eq: $slug }) {
      ...Products
    }
  }
`;
