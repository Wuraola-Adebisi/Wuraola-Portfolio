export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Inter", "sans-serif"],
        geist: ["Geist", "Inter", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      colors: {
        brand: {
          red: "#fe0600",
          fire: "#bc0400",
        },
      },
    },
  },
  plugins: [],
};