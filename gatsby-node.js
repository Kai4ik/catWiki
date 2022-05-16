const fetch = require("node-fetch");

exports.onPostBuild = ({ reporter }) => {
  reporter.info(
    `Your Gatsby site has been built - data has been successfully fetched!`
  );
};

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const data = await response.json();
  data.forEach((item) => {
    console.log(item.id);
    createNode({
      ...item,
      id: item.id,
      internal: {
        type: "CatBreeds",
        contentDigest: createContentDigest(item),
      },
    });
  });
};
