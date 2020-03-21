import { graphql, useStaticQuery } from "gatsby";

const useContact = () => {
  const ContactsData = useStaticQuery(graphql`
    query {
      contentfulContactUs {
        title
        subtitle
        banner {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        contactMethods {
          internal {
            content
          }
        }
      }
    }
  `);

  return ContactsData.contentfulContactUs;
};

export default useContact;
