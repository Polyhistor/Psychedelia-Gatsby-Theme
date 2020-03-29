import { useStaticQuery, graphql } from "gatsby";

const useProducts = () => {
  const productsData = useStaticQuery(graphql`
    query {
      allContentfulProducts {
        edges {
          node {
            ...Products
          }
        }
      }
    }
  `);
  return productsData.allContentfulProducts.edges;
};

export default useProducts;
