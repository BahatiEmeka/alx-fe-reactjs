module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify files to scan for unused styles
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}, // Customize the theme
  },
  variants: {
    extend: {}, // Extend variants for utilities
  },
  plugins: [], // Add plugins if needed
};
