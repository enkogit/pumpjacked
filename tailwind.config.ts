import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f6ff",
          100: "#e6efff",
          200: "#cddfff",
          300: "#a2c0ff",
          400: "#6f98ff",
          500: "#3d6eff",
          600: "#1f4df6",
          700: "#163cd1",
          800: "#142fa6",
          900: "#132a85"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
