// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    bgDark: "#000",
    dark: "#291507",
    secondaryText: "#f9f9f9",
  },
  sizes: {
    container: {
      xl: "1840px",
    },
  },
};

export default extendTheme(theme);
