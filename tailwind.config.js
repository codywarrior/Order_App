/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#356b82",
        secondary: "#bddae0",
        "light-green": "#47cd85",
        "light-red": "#ea1900",
        "light-blue": "#61a5c2",
      },
    },
  },
};
