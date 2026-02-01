// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1a6bff',     // Bleu clair vif
        'primary-dark': '#0d4dc2', // Bleu foncé
        'secondary': '#2d3748',   // Gris foncé
        'light': '#f8fafc',       // Gris très clair
        'accent': '#38bdf8',      // Bleu ciel
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
}