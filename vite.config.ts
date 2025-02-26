import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from '@nabla/vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    allowedHosts: true
    
  },
  plugins: [eslint(), vue(), vueJsx()],
});
