import { useStaticQuery, graphql } from "gatsby";

const useFacts = () => {
  const FactsData = useStaticQuery(graphql`
    query {
      allContentfulFacts {
        edges {
          node {
            contentfulid
            factNumber
            factDescription
          }
        }
      }
    }
  `);
  return FactsData.allContentfulFacts.edges;
};

export default useFacts;
