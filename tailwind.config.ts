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
        "bg-primary": "#0a0a0f",
        "bg-card": "rgba(255, 255, 255, 0.03)",
        "text-primary": "#ffffff",
        "text-secondary": "rgba(255, 255, 255, 0.6)",
        "text-muted": "rgba(255, 255, 255, 0.4)",
        "accent-cyan": "#00d4ff",
        "accent-purple": "#8b5cf6",
        "badge-bg": "rgba(139, 92, 246, 0.15)",
        "badge-text": "#a78bfa",
      },
    },
  },
  plugins: [],
};

export default config;