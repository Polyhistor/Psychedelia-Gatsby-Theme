import React from "react";

// Components
import Layout from "../layouts/layout";
import BannerLanding from "../components/BannerLanding";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import FeatureBoxContainer from "../components/FeatureBoxContainer/FeatureBoxContainer";

// TODO - TYPE CHECK
const index = () => {
  return (
    <Layout>
      <BannerLanding></BannerLanding>
      <ProductsContainer></ProductsContainer>
      <FeatureBoxContainer></FeatureBoxContainer>
    </Layout>
  );
};

export default index;
