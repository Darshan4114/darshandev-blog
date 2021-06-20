module.exports = {
  siteMetadata: {
    title: `DarshanDev`,
    name: `DarshanDev`,
    siteUrl: `https://darshandev.tech`,
    description: `I am a web developer from Pune. I design and develop websites for businesses. HTML CSS JS.
    You can reach out to me on darshan@darshandev.tech. I'm open to freelance work`,
    hero: {
      heading: `The Developers Blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/DarshanDhabale4`,
      },
      {
        name: `github`,
        url: `https://github.com/darshan4114`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/darshan-dhabale-a856b8160/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/darshandev`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
