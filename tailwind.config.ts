/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{tsx, ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "app-text-primary": "#4D4D4D",
        "app-text-secondary": "#161616",
        "main-drak": "#000",
        "pure-white": "#fff",
        "primary-color": "#FFEAD0",
        "secondary-color": "#FFCC8D",
        "footer-bg": "#252525",
        "footer-color": '#AAA',
        "btn-bg-1": "#FFEAD0",
        "btn-selected-bg-1": "#E17654",
        "btn-selected-bg-2": "#161616",
        "btn-selected-bg-3": "#115E59",
        "btn-bg-primary": "#FF8C38"
      },

      backgroundImage: {
        "home-page": "url('../../public/images/home-main.png')"
      },

      fontFamily: {
        "inter-black": ["inter-black", "Arial", "sans-serif"],
        "inter-extrabold": ["inter-extrabold", "Arial", "sans-serif"],
        "inter-bold": ["inter-bold", "Arial", "sans-serif"],
        "inter-semibold": ["inter-semibold", "Arial", "sans-serif"],
        "inter-medium": ["inter-medium", "Arial", "sans-serif"],
        "inter-regular": ["inter-regular", "Arial", "sans-serif"],
      },

      gridTemplateRows: {
        "app": "112px 1fr 75px"
      }
    },
  },
  plugins: [],
} satisfies Config;

