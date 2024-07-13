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
    },
  },
  plugins: [],
} satisfies Config;
