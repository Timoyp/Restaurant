import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0b0a",
          2: "#111311",
          3: "#1a1d1a",
          4: "#242824",
        },
        neon: {
          DEFAULT: "#39ff88",
          dim: "#1fa35a",
          glow: "rgba(57, 255, 136, 0.35)",
        },
        bone: {
          DEFAULT: "#f5f1e8",
          dim: "#a8a69c",
        },
        gold: "#c9a96e",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        jp: ["var(--font-jp)", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "1px",
        md: "3px",
        lg: "4px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-hint": "scroll-hint 2.4s ease-in-out infinite",
      },
      keyframes: {
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.2" },
          "50%": { transform: "translateY(8px)", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
