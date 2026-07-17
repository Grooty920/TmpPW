import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
  site: "https://lovealwayshere.cc.cd",
});

