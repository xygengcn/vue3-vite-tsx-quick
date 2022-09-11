import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from '@rollup/plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint({ fix: true }), vue(), vueJsx()],
});
