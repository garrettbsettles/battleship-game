import typescript from 'rollup-plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
	input: './src/scripts/index.ts',
	output: {
		file: './build/bundle.min.js',
		format: 'iife',
		name: 'bundle',
	},
	watch: {
		exclude: 'node_modules/**',
	},
	plugins: [
		postcss({ extract: true }),
		typescript(),
		commonjs(),
		resolve(),
		serve(),
		livereload(),
	],
};
