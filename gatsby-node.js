const fetch = require("node-fetch");
const path = require(`path`);
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.onPostBuild = ({ reporter }) => {
  reporter.info(
    `Your Gatsby site has been built - data has been successfully fetched!`
  );
};

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type catBreeds implements Node {
      image: File @link(from: "fields.image")
    }
  `);
};

// here we use it to fetch data from API and based on it - create nodes
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const data = await response.json();

  data.forEach((item) => {
    if (item.image && Object.keys(item.image).length !== 0) {
      createNode({
        ...item,
        id: item.id,
        internal: {
          type: "catBreeds",
          contentDigest: createContentDigest(item),
        },
      });
    }
  });
};

// triggered every time we create the node
exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  cache,
  store,
  reporter,
}) => {
  if (node.internal.type === "catBreeds") {
    // downloads external images on GraphQL layer (disk) so we can work with them locally and query them
    const imageNode = await createRemoteFileNode({
      // The source url of the remote file
      url: node.image.url,

      // The id of the parent node (i.e. the node to which the new remote File node will be linked to.
      parentNodeId: node.id,

      // The action used to create nodes
      createNode,

      // A helper function for creating node Ids
      createNodeId,

      // Gatsby's cache which the helper uses to check if the file has been downloaded already. It's passed to all Node APIs.
      cache,
      store,
      reporter,
    });

    // if the file was created, extend the imageNode with new field - "image"
    if (imageNode) {
      createNodeField({ node, name: "image", value: imageNode.id });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const breedPage = path.resolve("src/components/breedPage.js");

  const breeds = await graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allCatBreeds(limit: $limit) {
          nodes {
            name
            id
            description
            temperament
            origin
            life_span
            adaptability
            affection_level
            grooming
            child_friendly
            intelligence
            health_issues
            social_needs
            stranger_friendly
            image {
              childImageSharp {
                gatsbyImageData(height: 500)
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  );

  breeds.data.allCatBreeds.nodes.map((el) => {
    createPage({
      path: `/breed-${el.id}`,
      component: breedPage,

      // Send additional data to page component
      context: {
        breedInfo: el,
      },
    });
  });
};
