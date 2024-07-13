import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        mono: [
          "JetBrains Mono Variable",
          "JetBrains Mono",
          ...defaultTheme.fontFamily.mono,
        ],
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
        "4xs": "0.375rem",
        "5xs": "0.25rem",
        "5.5xs": "0.2rem",
        "6xs": "0.125rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
