/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // Background colors
        'light-bg': '#F8F8FB',
        'dark-bg': '#141625',

        // Typography colors
        'light-typo': '#0C0E16',
        'dark-typo': '#FFFFFF',

        // Primary colors
        'primary': '#7C5DFA',
        'primary-light': '#9277FF',

        // Secondary colors
        'secondary': '#1E2139',
        'secondary-light': '#252945',

        // Danger colors
        'danger': '#EC5757',
        'danger-light': '#FF9797',
      },
    }
  },
  plugins: [],
}
