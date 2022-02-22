export default {
  content: ['./**/*.html', './src/**/*.svelte'],
  theme: {
    colors: {
      blue: '#1fb6ff',
      cyan: '#2dd9da',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Oswald', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['Oswald', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
      body: [
        'Graphik',
        'Oswald',
        '"Open Sans"',
        '"Helvetica Neue"',
        'sans-serif',
      ],
    },
    screens: {
      sm: '640px',
      md: '1024px',
      xl: '1280px',
    },
    extend: {},
  },
};
