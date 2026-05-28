const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '540px',   // Small devices
      md: '800px',   // Tablets
      lg: '1024px',  // Laptops
      xl: '1280px',  // Desktops
      '2xl': '1536px', // Large screens
    },
    extend: {
      fontFamily: {
        melodrama: ["Melodrama", "serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
      },
    },
  },
  plugins: [],
};

export default config;
