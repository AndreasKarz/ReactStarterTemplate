import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react(), VitePluginHtmlEnv()],
});
