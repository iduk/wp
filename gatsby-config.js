module.exports = {
  siteMetadata: {
    title: `letsGetit`,
    description: `페이지 소개, 테스트페이지`,
    author: `iduk`,
    siteUrl: `https://letsby.gatsbyjs.io`,
    // nav
    menuLinks: [
      {
        name: `About`,
        url: `/about`,
      },
      {
        name: `Reference`,
        url: `/reference`,
      },
      {
        name: `Blog`,
        url: `/blog`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [600, 900, 1200, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `letsby blog`,
        short_name: `letsby`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/images/pixelduk.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-preset-env')({
            stage: 0,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]__[hash:base64:5]',
            exportLocalsConvention: 'camelCaseOnly',
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-minify-classnames',
      options: {
        /* gatsby-plugin-minify-classnames options here */
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
