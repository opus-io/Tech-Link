// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Ganti sesuai URL deploy:
// - User/Org Pages (https://<user>.github.io): base: "/"
// - Project Pages (https://<user>.github.io/<repo>): base: "/Tech-Link"
// Untuk custom domain: base: "/" + isi site dengan domain kamu
export default defineConfig({
  integrations: [tailwind()],
  site: "https://opus-io.github.io",
  base: "/Tech-Link",
});