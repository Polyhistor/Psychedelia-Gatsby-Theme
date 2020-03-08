import React from "react";
import Layout from "../layouts/layout";
import BannerLanding from "../components/BannerLanding";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

// TODO - TYPE CHECK
const index = () => {
  return (
    <Layout>
      <BannerLanding></BannerLanding>
      <ProductsContainer></ProductsContainer>
    </Layout>
  );
};

export default index;
