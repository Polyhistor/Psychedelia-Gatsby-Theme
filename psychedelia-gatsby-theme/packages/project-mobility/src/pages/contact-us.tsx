import React from "react";

// Components
import BannerProducts from "../components/BannerProducts/BannerProducts";
import ContactMethods from "../components/AboutUs/ContactMethods";
import Layout from "../layouts/layout";

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
      <ContactMethods contactsData={contactsData.contactMethods}></ContactMethods>
    </Layout>
  );
};

export default ContactUs;
