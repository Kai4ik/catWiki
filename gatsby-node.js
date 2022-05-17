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

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  cache,
  store,
  reporter,
}) => {
  if (node.internal.type === "catBreeds") {
    const imageNode = await createRemoteFileNode({
      url: node.image.url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
      reporter,
    });

    if (imageNode) {
      createNodeField({ node, name: "image", value: imageNode.id });
    }
  }
};
