/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1800px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        color: "#f3f3f3",
       
      }
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          width: "min(100% - 2rem, 1300px);",
        },
      });
      
    },
  ],
};
