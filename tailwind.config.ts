import type { Config } from "tailwindcss";
import Image from "next/image";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'footer-color': '#66b6d2',
        'button-hover': '#881337 ',
        'primary': '#048AB6',
      },
      screens: {
        'sm': '640px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'xs': '480px',
      },
      lineHeight: {
        'custom-small': '1.2',
      },
      margin: {
        'large': '4rem',
        'mega': '6rem',
      }
     
    },
  },
  plugins: [],
};
export default config;