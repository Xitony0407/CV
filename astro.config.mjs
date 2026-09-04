import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Xitony0407.github.io',
  base: '/CV',

  vite: {
    plugins: [tailwindcss()]
  }
});