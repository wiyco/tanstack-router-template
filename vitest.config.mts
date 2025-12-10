import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  /** @see {@link https://vitest.dev/config} */
  test: {
    environment: "jsdom",
    include: [
      "test/**/*.test.{js,jsx,ts,tsx}",
      "src/**/*.test.{js,jsx,ts,tsx}",
    ],
    globals: true,
  },
});
