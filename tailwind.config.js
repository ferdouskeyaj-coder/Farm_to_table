/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        firm: { DEFAULT: '#0f172a', light: '#334155' },
        table: { DEFAULT: '#f59e0b', dark: '#b45309' },
      },
    },
  },
  plugins: [],
};