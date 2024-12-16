import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: '/network-landing/', // 加入這行，注意要和倉庫名稱一樣
    plugins: [react()],
});
