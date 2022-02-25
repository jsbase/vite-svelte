module.exports = () => ({
  content: ['./index.html', './src/index.css', './src/**/.svelte'],
  darkMode: 'media',
  theme: {
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6'
    },
    fontFamily: {
      sans: ['Oswald', '"Open Sans"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['Oswald', '"Open Sans"', 'sans-serif'],
      body: ['Graphik', 'Oswald', '"Open Sans"', 'sans-serif']
    }
  }
});
