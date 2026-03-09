import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mood colors
        mood: {
          1: "#ef4444", // red
          2: "#f97316", // orange
          3: "#eab308", // yellow
          4: "#22c55e", // green
          5: "#6366f1", // indigo
        },
        // Brand / UI
        brand: {
          bg:        "#0f1117",
          surface:   "#1a1d27",
          border:    "#2a2d3a",
          primary:   "#6366f1",
          "primary-hover": "#4f46e5",
          muted:     "#6b7280",
          subtle:    "#374151",
          text:      "#f9fafb",
          "text-secondary": "#9ca3af",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs:    ["0.75rem",  { lineHeight: "1rem" }],
        sm:    ["0.875rem", { lineHeight: "1.25rem" }],
        base:  ["1rem",     { lineHeight: "1.5rem" }],
        lg:    ["1.125rem", { lineHeight: "1.75rem" }],
        xl:    ["1.25rem",  { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      spacing: {
        xs:    "0.25rem",
        sm:    "0.5rem",
        md:    "1rem",
        lg:    "1.5rem",
        xl:    "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
