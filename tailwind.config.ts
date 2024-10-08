import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background': 'var(--background-color)',
        'header': 'var(--header-color)',
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
      },
      textColor: {
        'primary': 'var(--body-text-color)'
      },
      borderColor: {
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
      },
      boxShadow: {
        primary: 'var(--shadow-primary)', 
        secondary: 'var(--shadow-secondary)', 
      },
    },
  },
  plugins: [],
};

export default config;
