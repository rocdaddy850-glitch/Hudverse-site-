import autoprefixer from 'autoprefixer';

// Try to use the dedicated PostCSS plugin package for Tailwind (what Next expects).
// If that package isn't available (or a native binding issue appears), fall back
// to the regular `tailwindcss` PostCSS plugin. Using top-level await lets us
// probe availability at load time.

const plugins = {};

try {
  // prefer the dedicated plugin package if available
  // eslint-disable-next-line no-unused-vars
  const _ = await import('@tailwindcss/postcss');
  plugins['@tailwindcss/postcss'] = {};
} catch (err) {
  try {
    // fallback to the classic tailwindcss plugin
    // eslint-disable-next-line no-unused-vars
    const _2 = await import('tailwindcss');
    plugins['tailwindcss'] = {};
  } catch (err2) {
    // If neither is available, PostCSS will error later. Keep autoprefixer
    // so tooling that doesn't need Tailwind can still function.
  }
}

plugins.autoprefixer = {};

export default { plugins };
