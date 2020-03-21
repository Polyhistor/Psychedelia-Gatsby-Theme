import React from "react";

// Components
import BannerProducts from "../components/BannerProducts/BannerProducts";
import ContactMethods from "../components/AboutUs/ContactMethods";
import Layout from "../layouts/layout";
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  H1
} from "../components/Common";

// Queries
import useContact from "../queries/useContact";

const ContactUs = () => {
  const contactsData = useContact();
  console.log(contactsData);

  return (
    <Layout>
      <BannerProducts
        title={contactsData.title}
        subtitle={contactsData.subtitle}
        banner={contactsData.banner.localFile.childImageSharp.fluid}
      ></BannerProducts>
      <ContactMethods></ContactMethods>
    </Layout>
  );
};

export default ContactUs;
