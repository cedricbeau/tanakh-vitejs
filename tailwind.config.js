/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{njk,html}",
    "./pages/**/*.{njk,html}",
    "./template-parts/**/*.{njk,html}",
    "./*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

