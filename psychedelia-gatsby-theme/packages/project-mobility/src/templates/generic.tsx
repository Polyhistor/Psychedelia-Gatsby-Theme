import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../layouts/layout";
import BannerProducts from "../components/BannerProducts/BannerProducts";
import GenericBody from "../components/GenericBody/GenericBody";

const Generic = ({ data, pageContext }) => {
  console.log(data);
  return (
    <Layout>
      <BannerProducts
        title={data.contentfulGeneric.title}
        subtitle={data.contentfulGeneric.subtitle}
        banner={data.contentfulGeneric.banner.localFile.childImageSharp.fluid}
      ></BannerProducts>
      <GenericBody
        bodyData={data.contentfulGeneric.description.json}
      ></GenericBody>
    </Layout>
  );
};

export default Generic;

export const query = graphql`
  query($slug: String!) {
    contentfulGeneric(slug: { eq: $slug }) {
      ...Generic
    }
  }
`;
