import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
