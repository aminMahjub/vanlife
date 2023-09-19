/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{tsx, ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "app-text": "#4D4D4D",
        "  ": "#161616",
        "main-drak": "#000",
        "pure-white": "#fff",
        "primary-color": "#FFEAD0",
        "btn-bg-1": "#FFEAD0",
        "btn-hover-bg-1": "#E17654",
        "btn-hover-bg-2": "#161616",
        "btn-hover-bg-3": "#115E59",
      },

      fontFamily: {
        "inter-black": ["inter-black", "Arial", "sans-serif"],
        "inter-extrabold": ["inter-extrabold", "Arial", "sans-serif"],
        "inter-bold": ["inter-bold", "Arial", "sans-serif"],
        "inter-semibold": ["inter-semibold", "Arial", "sans-serif"],
        "inter-medium": ["inter-medium", "Arial", "sans-serif"],
        "inter-regular": ["inter-regular", "Arial", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
