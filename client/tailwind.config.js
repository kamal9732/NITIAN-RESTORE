/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#CF2E2E",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}