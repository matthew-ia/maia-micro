import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	preprocess: [
		preprocess({
			scss: {
				includePaths: ['./src/styles', './node_modules'],
				prependData: `
					@import "./src/styles/_functions.scss";
					@import "./src/styles/tokens/_index.scss";
					@import "./src/styles/mixins/_index.scss";
				`
			},
			postcss: {
				plugins: [
					autoprefixer(),
				]
			}
		}),
	]
};

export default config;
