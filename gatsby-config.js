/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: "gatsby-plugin-tslint",
            options: {
                test: /\.ts$|\.tsx$/,
                exclude: /(node_modules|cache|public)/,
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `React`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
    ],
};
