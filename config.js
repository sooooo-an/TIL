const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://devsoonote.github.io/til',
    gaTrackingId: 'G-FHBWCPLJWX',
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title:
      "<h1>Soo TIL</h1>",
    githubUrl: 'https://github.com/devsoonote/TIL',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
  },
  sidebar: {
    forcedNavOrder: [
      '/2021_11',
    ],
    collapsedNav: [
      '/2021_11', // add trailing slash if enabled above
    ],
    links: [{ text: 'Soo Blog', link: 'https://devsoonote.github.io' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://devsoonote.github.io/til'>Today I Learn</a>",
  },
  siteMetadata: {
    title: 'Soo TIL',
    description: 'Today I Learn',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
