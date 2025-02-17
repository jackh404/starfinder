import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      "luxury",
      "synthwave",
      "night",
      "dracula",
      {
        starfinder: {
          
"primary": "#1a4994",
          
"secondary": "#0891b2",
          
"accent": "#3283b8",
          
"neutral": "#41486b",
          
"base-100": "#0b0916",
          
"info": "#eefdff",
          
"success": "#00ff00",
          
"warning": "#fde047",
          
"error": "#ff0000",
          },
        },
    ]
  }
} satisfies Config;
