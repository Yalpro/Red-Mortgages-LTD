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
        primary: "#CC0000",
        "primary-dark": "#8B0000",
        "primary-mid": "#B22222",
        "primary-light": "#FF4444",
        "off-white": "#F9F9F9",
        surface: "#FFFFFF",
        "surface-alt": "#F5F5F5",
        "text-primary": "#1A1A1A",
        "text-secondary": "#4A4A4A",
        "text-muted": "#6B6B6B",
        border: "rgba(0,0,0,0.08)",
        "red-light": "rgba(204,0,0,0.08)",
        whatsapp: "#25D366",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        premium: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 8px -1px rgba(0, 0, 0, 0.03)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 2px 10px -2px rgba(0, 0, 0, 0.02)",
        navbar: "0 4px 30px -10px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        card: "8px",
        btn: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
