/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "roses-dark": "#231f20",
        "roses-red": "#ea3723",
        "light-gray": "#f8f8f8",
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
