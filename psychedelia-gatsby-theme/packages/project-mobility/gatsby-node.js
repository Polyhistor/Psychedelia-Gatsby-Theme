exports.createPages = async({graphql, actions}, themeOptions) => {
    const {createPage} = actions 

    return await graphql(`
    {
    allContentfulProducts { 
        edges {
          node {
            slug 
          }
        }
      }
    }
    `).then(result => {

    if( result.errors) {
        throw result.errors 
        process.exit(1)
    }
   
    const productsTemplate = require.resolve('./src/templates/products.js')
    const productsData = result.data.allContentfulProducts.edges

    productsData.forEach(product=> {
        createPage({
            path: `${product.node.slug}`,
            component: productsTemplate, 
            context: {
                slug: product.node.slug
            }
        })
    })

})
}