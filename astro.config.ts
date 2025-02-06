import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://as215207.net",
  prefetch: true,
  integrations: [tailwind(), sitemap(), svelte()],
  output: "server",
  adapter: cloudflare(),
});
