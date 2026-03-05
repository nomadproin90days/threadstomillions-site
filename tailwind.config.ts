import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        background: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        foreground: "hsl(var(--text))",
        text: "hsl(var(--text))",
        "muted-foreground": "hsl(var(--muted-text))",
        muted: "hsl(var(--muted-text))",
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: "hsl(var(--accent))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      borderRadius: {
        card: "var(--radius-card)",
        ui: "var(--radius-ui)",
      },
      maxWidth: {
        content: "1200px",
        reading: "720px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,.04)",
        "card-hover": "0 8px 24px rgba(0,0,0,.08)",
      },
      fontFamily: {
        heading: ['"DM Serif Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        h1: ["56px", { lineHeight: "60px" }],
        h2: ["40px", { lineHeight: "46px" }],
        h3: ["28px", { lineHeight: "34px" }],
        "body-l": ["18px", { lineHeight: "28px" }],
        body: ["16px", { lineHeight: "26px" }],
        small: ["14px", { lineHeight: "22px" }],
        micro: ["12px", { lineHeight: "16px" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
