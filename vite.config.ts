import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // 프로덕션 소스맵 비활성화
    chunkSizeWarningLimit: 1000, // 청크 크기 제한 경고 설정
    minify: "terser", // terser 사용하여 압축
    terserOptions: {
      compress: {
        drop_console: true, // 콘솔 로그 제거
        drop_debugger: true, // 디버거 제거
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 'node_modules'가 경로에 포함된 경우에만 처리
          if (id.includes("node_modules")) {
            const segments = id.split("node_modules/");
            const moduleName = segments[1]?.split("/")[0];
            return `vendor/${moduleName}`;
          }
        },
      },
    },
  },
});
