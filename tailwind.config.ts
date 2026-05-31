import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f1f4f9",
          100: "#dde4ef",
          200: "#c0cee1",
          300: "#94adcd",
          400: "#6184b2",
          500: "#3f6498",
          600: "#2f4d7e",
          700: "#283f66",
          800: "#243656",
          900: "#1b2840",
          950: "#111a2b",
        },
        graphite: {
          50: "#f6f7f8",
          100: "#eaecef",
          200: "#d2d6dd",
          300: "#aeb5c1",
          400: "#838d9f",
          500: "#646f82",
          600: "#4f5869",
          700: "#414856",
          800: "#383d49",
          900: "#32363f",
          950: "#1d2026",
        },
        // Сдержанный steel/cyan-акцент — для тонких линий, иконок и подсветок
        steel: {
          50: "#eef6f8",
          100: "#d6eaef",
          200: "#aed5de",
          300: "#7cbecb",
          400: "#4aa3b6",
          500: "#2f8699",
          600: "#286c7e",
          700: "#255867",
          800: "#244955",
          900: "#213e49",
          950: "#102730",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.011em",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(17, 26, 43, 0.05)",
        card: "0 1px 2px rgba(17, 26, 43, 0.04), 0 8px 24px rgba(17, 26, 43, 0.06)",
        "card-hover":
          "0 6px 14px rgba(17, 26, 43, 0.07), 0 24px 56px rgba(17, 26, 43, 0.14)",
        // Мягкая подсветка для премиальных кнопок/акцентов
        glow: "0 8px 30px rgba(47, 134, 153, 0.25)",
        "glow-navy": "0 10px 34px rgba(27, 40, 64, 0.35)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(17,26,43,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,26,43,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, 18px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 9s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
