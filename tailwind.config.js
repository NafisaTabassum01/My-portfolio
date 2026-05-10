/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#020617',
        'accent-blue': '#4f46e5',
        'accent-glow': '#6366f1',
        'glass-bg': 'rgba(15, 23, 42, 0.6)',
      },
      width: {
        '10/12': '83.333333%',
      }
    },
  },
  plugins: [],
}
