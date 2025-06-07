import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
});
