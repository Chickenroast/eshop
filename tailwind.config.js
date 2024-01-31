/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#E6A4B4",
      back: "#F5EEE6",
      backlight: {
        light: "#F5F5F5",
        DEFAULT: "#E8E8E8",
      },
      secondary: "#F3D7CA",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
