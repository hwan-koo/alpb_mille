/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      screens: {
        mobile: "390px",
      },
      // screens: {
      //   "2xl": { max: "1535px" },
      //   // => @media (max-width: 1535px) { ... }

      //   xl: { max: "1279px" },
      //   // => @media (max-width: 1279px) { ... }

      //   lg: { max: "1023px" },
      //   // => @media (max-width: 1023px) { ... }

      //   md: { max: "767px" },
      //   // => @media (max-width: 767px) { ... }

      //   sm: { max: "639px" },
      //   // => @media (max-width: 639px) { ... }
      //   mobile: { max: "390px" },
      // },
    },
  },
  plugins: [],
};
