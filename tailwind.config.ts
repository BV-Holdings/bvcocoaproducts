import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoaBrown: "#3D2B1F",
        terracotta: "#B5651D",
        amber: "#D4A24C",
        sustainableGreen: "#4A7856",
        warmCream: "#FAF6F0",
        softSand: "#EDE4D8",
        charcoal: "#2A1F18",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Fraunces", "Lora", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Work Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        brand: "8px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

export default config;
