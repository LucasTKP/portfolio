import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#10B981',
        'secondary': '#ABB2BF',
        'background': '#282c33'
      },
      screens: {
        'lsm': '475px',
        ...defaultTheme.screens,
      },
      animation: {
        typewriter: 'blinkCursor 1s steps(60) infinite normal, typing 4s steps(60) both',
      },

      keyframes: {
        blinkCursor: {
          '0%': { borderRight: '1px solid #aab2bf' },
          '100%': { borderRight: '1px solid transparent' },
        },

        typing: {
          '0%': { width: '0px' },
          '100%': { width: '100%', backgroundColor: 'transparent' },
        }
      }

    },
  },
  plugins: [],
};
export default config;
