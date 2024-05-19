/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '.dark-mode'],
  content: [],
  safelist: [
    {
      pattern: /bg-(red|green|blue|yellow|orange|purple|pink|gray|brown)-400/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-accent': 'var(--primary-color_accent)',
        secondary: 'var(--secondary-color)',
        'secondary-accent': 'var(--secondary-color_accent)',
        'light-default': 'var(--background-light)',
        'light-accent': 'var(--background-light_accent)',
        'dark-default': 'var(--background-dark)',
        'dark-accent': 'var(--background-dark_accent)',
      },
      borderRadius: {
        1: 'var(--border-radius-1)',
        2: 'var(--border-radius-2)',
      },
    },
  },
  plugins: [],
};
