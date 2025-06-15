import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mahalle-bolvar/", // اسم پوشه‌ای که توی public_html گذاشتی
  plugins: [react()],
});
