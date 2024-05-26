import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eSLint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eSLint()],
});
