import autoprefixer from 'autoprefixer';

// Use the dedicated PostCSS plugin package for Tailwind (what Next expects).
// Provide the plugin package name so Next can require it directly.
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

export default config;
