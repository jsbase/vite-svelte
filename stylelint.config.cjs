module.exports = () => ({
  plugins: ['stylelint-a11y'],
  overrides: [
    {
      content: ['./index.html'],
      customSyntax: 'postcss-html'
    },
    {
      content: './src/index.css',
      customSyntax: 'postcss-scss'
    }
  ],
  content: './src/**/.svelte',
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-html/svelte'
  ],
  rules: {
    'color-named': 'never',
    'font-family-name-quotes': 'always-where-required',
    'font-weight-notation': 'named-where-possible',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'string-quotes': 'single',
    'value-keyword-case': 'lower',
    'unit-disallowed-list': [],
    'max-empty-lines': 2,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'font-family-no-missing-generic-family-keyword': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^lost-/']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'declaration-block-trailing-semicolon': null,
    ignoreFiles: [
      'node_modules/*',
      'src/assets/*',
      'dist/*',
      '.github/*',
      '.vscode/*',
      '.git/*'
    ],
    defaultSeverity: 'error'
  }
});
