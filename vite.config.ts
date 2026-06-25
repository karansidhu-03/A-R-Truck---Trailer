import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    tanstackRouter(),
    tanstackStart({
      server: {
        entry: "server.ts",
      },
      target: "vercel",
    }),
    nitro({
      preset: "vercel",
    }),
    tailwindcss(),
    react(),
  ],
});
