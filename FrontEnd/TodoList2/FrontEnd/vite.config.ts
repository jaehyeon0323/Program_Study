import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 브라우저 자동 실행 설정
    proxy: {
      '/api': {
        target: 'https://localhost:7063', // .NET API 서버 주소
        changeOrigin: true,
        secure: false, // 인증서 사용 시 false (개발용)
      },
    },
  },
    
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // "@/components/Button"
    },
  },
})
