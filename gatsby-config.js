const path = require("path")

module.exports = {
  siteMetadata: {
    title: "landie",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        common: path.join(__dirname, "src", "components", "common")
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
};
