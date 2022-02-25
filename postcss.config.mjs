module.exports = {
  map: false,
  parser: 'sugarss',
  plugins: {
    tailwindcss: {
      config: './tailwindcss-config.js',
    },
    autoprefixer: {},
  },
};
/*
module.exports = {
  map: false,
  parser: 'sugarss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('postcss-preset-env')({features: {'nesting-rules': false}}),
    require('autoprefixer'),
  ],
  syntax: 'postcss-scss',
};

import PostCssImporter from 'postcss-import';
import PostcssPreset from 'postcss-preset-env';
import TailwindNesting from 'tailwindcss/nesting';
import PostcssNesting from 'postcss-nesting';
import Tailwind from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

export default {
  plugins: [
    PostCssImporter(),
    TailwindNesting(PostcssNesting),
    Tailwind(),
    Autoprefixer(),
    PostcssPreset({ features: { 'nesting-rules': false } }),
  ],
};
*/
