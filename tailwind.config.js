/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        beige: "#F4E9E1",
        mustard: "#f2cb50",
        "light-blue": "#D3E6EF",
        "light-pink": "#fad7d9",
        "primary-pink": "#FFBBBE",
        "voice-orange": "#F2682F",
        "advice-green": "#00A463",
        "primary-blue": "#307CBF",
        "primary-red": "#E74C3C",
      },
      screens: {
        // This is just to allow more breakpoints smaller than the default, can be changed to something else
        xxs: "320px",
        xs: "476px",
        "3xl": "1650px",
        max: "1900px",
      },
    },
    fontFamily: {
      sans: ["soleil", "inter", "sans-serif"],
      serif: ["rooney-web", "serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
