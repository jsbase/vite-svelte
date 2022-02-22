module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': false,
      },
    }),
  ],
}; /*
import PostCssImporter from 'postcss-import';
import TailwindResolver from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

const postCssConfig = {
  plugins: [PostCssImporter(), TailwindResolver(), Autoprefixer()],
};

export default postCssConfig; */
