const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
};
