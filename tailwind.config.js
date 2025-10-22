/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // if using pages dir
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add custom animations or extend defaults here
    },
  },
  plugins: [
    require("tailwindcss-animate"), // ✅ animation plugin
  ],
};
