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
        subtitle={data.contentfulProducts.productSubtitle}
        banner={
          data.contentfulProducts.productBannerImage.localFile.childImageSharp
            .fluid
        }
      ></BannerProducts>
      <ProductsInfo
        titles={["Product Description", "Product Dimension"]}
        information={[
          [
            data.contentfulProducts.productDescription.productDescription,
            data.contentfulProducts.productDimension.productDimension
          ],
          data.contentfulProducts.productSpecification,
          data.contentfulProducts.priceList,
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
