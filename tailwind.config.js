/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-black": "#000000",
        "primary-white": "#FFFFFF",
        "primary-red": "#FF5555",
      },
      fontFamily: {
        "ClashDisplay-Regular": "ClashDisplay-Regular",
      },
    },
  },
  plugins: [],
};
