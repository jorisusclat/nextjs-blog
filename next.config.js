const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  i18n: {
    locales: ['en-US', /* 'fr' */],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'nextjs-blog-liart-iota.vercel.app',
        defaultLocale: 'en-US',
      },
      {
        domain: 'nextjs-blog-liart-iota.vercel.app.fr',
        defaultLocale: 'fr',
      },
    ],
  },
};
