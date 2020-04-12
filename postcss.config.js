const purgeCSS = require('@fullhuman/postcss-purgecss')({
  content: ['./dist/**/*.html'],
  defaultExtractor: (content) => content.match(/[\w-(/|.):]+(?<!:)/g) || [],
});

const cssnano = require('cssnano')({
  preset: 'default',
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgeCSS, cssnano] : []),
  ],
};
