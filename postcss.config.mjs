module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('postcss-preset-env')({ features: { 'nesting-rules': false } }) ],
};
/*
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