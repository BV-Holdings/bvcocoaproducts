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
      spacing: {
        xs: "4px",
        sm: "12px",
        base: "8px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        gutter: "24px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontSize: {
        "label-sm": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "1.2", fontWeight: "600" }],
        "stat-numeric": ["48px", { lineHeight: "1", fontWeight: "700" }],
        "display-lg": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

export default config;
