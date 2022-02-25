module.exports = () => ({
  content: ['./index.html', './src/**/*.{html,js,svelte}'],
  darkMode: 'media',
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
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
});
