import postcssTailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [postcssTailwind(), autoprefixer()],
};

export default config;
