import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // base: "/",
  plugins: [
    remix({
      ssr: false,
      // basename: "./",
      // basename: '/spa/',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      buildEnd: async () => {
        console.log("asdf");
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    manifest: false,
  },
});
