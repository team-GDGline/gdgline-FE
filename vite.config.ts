import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // 배포 경로를 '/'로 설정
  server: {
    host: true, // 네트워크에서 접근 가능하도록 설정
    proxy: {
      "/api": {
        target: "http://34.64.38.113:8080", // 백엔드 API 서버 주소
        changeOrigin: true,
        rewrite: (path) => path, // 경로를 그대로 유지
      },
    },
  },
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
