const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `Devaki by Bonishbil |    A journey of 4 martially edged tribes consisting of 999 Unique
  pieces.
  `,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/logo.jpg',
    touchicon: './src/logo.jpg',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: ['gridsome-plugin-robots', '@gridsome/plugin-sitemap'],
};
