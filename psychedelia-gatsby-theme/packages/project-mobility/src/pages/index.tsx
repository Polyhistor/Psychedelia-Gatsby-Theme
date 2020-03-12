import React from "react";

// Components
import Layout from "../layouts/layout";
import BannerLanding from "../components/BannerLanding";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import FeatureBoxContainer from "../components/FeatureBoxContainer/FeatureBoxContainer";
import FactsContainer from "../components/Facts/FactsContainer";
import Footer from "../components/Footer/Footer"

// TODO - TYPE CHECK
const index = () => {
  return (
    <Layout>
      <BannerLanding></BannerLanding>
      <ProductsContainer></ProductsContainer>
      <FeatureBoxContainer></FeatureBoxContainer>
      <FactsContainer></FactsContainer>
      <Footer></Footer>
    </Layout>
  );
};

export default index;
