/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueDark: "#000080",
        blueLight: "#2B63BC",
        orangeLight: "#FF8E00",
        orangeDark: "#FF5003",
        brandBlack: "#0A0A0A",
        brandWhite: "#E9F6FF",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};
