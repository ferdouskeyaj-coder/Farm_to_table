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
        cream: {
          DEFAULT: '#FDFCF8',
          50: '#FDFCF8',
          100: '#FAF8F0',
          200: '#F5F2E8',
        },
        forest: {
          DEFAULT: '#1B3022',
          50: '#E8F0EB',
          100: '#D1E1D7',
          200: '#A3C3AF',
          300: '#75A587',
          400: '#47875F',
          500: '#1B3022',
          600: '#16261B',
          700: '#111D15',
          800: '#0C130E',
          900: '#070A08',
        },
        sage: {
          DEFAULT: '#B2AC88',
          50: '#F5F4EE',
          100: '#EBE9DD',
          200: '#D7D3BB',
          300: '#C3BD99',
          400: '#B2AC88',
          500: '#9D9670',
          600: '#7F7A5A',
          700: '#615D44',
          800: '#43402E',
          900: '#252318',
        },
      },
      fontFamily: {
        bengali: ['Hind Siliguri', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};