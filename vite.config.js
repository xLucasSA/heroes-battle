import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://homologacao3.azapfy.com.br',
        changeOrigin: true,
      }
    }
  }
});
