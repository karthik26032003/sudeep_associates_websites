import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Allow access through ngrok tunnels (any *.ngrok-free.dev / *.ngrok-free.app / *.ngrok.app host).
    allowedHosts: [".ngrok-free.dev", ".ngrok-free.app", ".ngrok.app"],
  },
  preview: {
    allowedHosts: [".ngrok-free.dev", ".ngrok-free.app", ".ngrok.app"],
  },
});
