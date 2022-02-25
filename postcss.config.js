module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
/*
import PostCssImporter from 'postcss-import';
import PostcssPreset from 'postcss-preset-env';
import TailwindNesting from 'tailwindcss/nesting';
import PostcssNesting from 'postcss-nesting';
import Tailwind from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

export default {
  plugins: [
    Autoprefixer(),
    PostCssImporter(),
    PostcssPreset({features: {'nesting-rules': false}}),
    Tailwind(),
    TailwindNesting(PostcssNesting),
  ],
};
*/
