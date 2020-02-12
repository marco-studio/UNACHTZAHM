module.exports = {
  siteMetadata: {
    title: `UNACHTZAHM`,
    description: `Eine Mischung aus Zauberei und Dosenbier! Es gibt zu viel Liebe und Hass, der kanalisiert werden muss. Es bedarf eines Podcasts, der sich dieser Sache annimmt. Schluss mit Arschkriecherei und Produktplatzierung. Es ist Zeit für ein ehrlicheres und echteres Leben. Plastikmüll gibt es bereits genügend in unseren Weltmeeren.`,
    author: `NASTIA UND RAMI`,
    twitter: ``,
    instagram: `https://www.instagram.com/unachtzahm/`,
    facebook: ``,
    youtube: `https://www.youtube.com/channel/UCEBiyxRVfxD0zqp9a6fJTNA`,
    apple: `https://podcasts.apple.com/podcast/id1454164092?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly91bmFjaHR6YWhtLnBvZGlnZWUuaW8vZmVlZC9tcDM=`,
    pocket: `https://pca.st/itunes/1454164092`,
    spotify: `https://open.spotify.com/show/4PLE87DZJcWUibIqfJyIbZ`,
    overcast: `https://overcast.fm/itunes1454164092`,
    castbox: `https://castbox.fm/vic/1454164092`,
    castro: `https://castro.fm/itunes/1454164092`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Funachtzahm.podigee.io%2Ffeed%2Fmp3`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://unachtzahm.podigee.io/feed/mp3`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
