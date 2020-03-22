exports.createPages = async ({ graphql, actions }, themeOptions) => {
  const { createPage } = actions;

  return await graphql(`
    {
      allContentfulProducts {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulGeneric {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
      process.exit(1);
    }

    const productsTemplate = require.resolve("./src/templates/products.tsx");
    const productsData = result.data.allContentfulProducts.edges;

    const genericTemplate = require.resolve("./src/templates/generic.tsx");
    const genericData = result.data.allContentfulGeneric.edges;

    productsData.forEach(product => {
      createPage({
        path: `${product.node.slug}`,
        component: productsTemplate,
        context: {
          slug: product.node.slug
        }
      });
    });

    genericData.forEach(generic => {
      createPage({
        path: `${generic.node.slug}`,
        component: genericTemplate,
        context: {
          slug: generic.node.slug
        }
      });
    });
  });
};
