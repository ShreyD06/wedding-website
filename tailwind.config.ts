import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          red: "var(--wedding-red)",
          gold: "var(--wedding-gold)",
          cream: "var(--wedding-cream)",
          crimson: "var(--wedding-crimson)",
          dark: "var(--wedding-dark)",
        }
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%) scaleX(-1)" },
          "100%": { transform: "translateX(0) scaleX(-1)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
    animation: {
      "slide-in-left": "slideInLeft 0.8s ease-out forwards",
      "slide-in-right": "slideInRight 0.8s ease-out forwards",
    }
  },
  plugins: [],
}

export default config
