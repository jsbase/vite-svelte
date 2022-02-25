module.exports = () => ({
  content: ['./index.html', './src/**/*.svelte'],
  darkMode: 'media',
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    fontFamily: {
      sans: [
        '"Helvetica Neue"',
        'Roboto',
        '"Open Sans"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'ui-sans-serif',
        'sans-serif',
        'system-ui'
      ]
    }
  }
});
