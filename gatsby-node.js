const fetch = require("node-fetch");
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
  data.forEach(async (item) => {
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
