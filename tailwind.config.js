/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coal: "#1E1E24",
        cream: "#EAE2B7",
        caramel: "#FCBF49",
        crimson: "#92140C",
        navy: "#003049",
        crimson: "#D62828",
        tangerine: "#F77F00",
        maroon: "#96031A",
      },
      fontFamily: {
        body: ["Nunito"],
        logo: ["Lobster"],
        vazirmatn: ["Vazirmatn"],
        nastaliq: ["Noto Nastaliq Urdu"],
      },
    },
  },
  plugins: [],
};
