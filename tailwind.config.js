/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
        purple: "#AD28EB",
      },
      backgroundImage: {
        "desktop-pattern":
          "url(/src/assets/images/background-pattern-desktop.svg)",
        "mobile-pattern":
          "url(/src/assets/images/background-pattern-mobile.svg)",
      },
    },
  },
  plugins: [],
};
