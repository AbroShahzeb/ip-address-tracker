/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 59%)",
        "very-dark-gray": "hsl(0, 0%, 17%)",
      },
      backgroundImage: {
        "mobile-pattern": 'url("images/pattern-bg-mobile.png")',
        "desktop-pattern": 'url("images/pattern-bg-desktop.png")',
      },
    },
  },
  plugins: [],
};
