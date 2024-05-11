import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eSLint from "vite-plugin-eslint";
import ViteSassPlugin from "vite-plugin-sass";

export default defineConfig({
  plugins: [react(), eSLint(), ViteSassPlugin()],
});
