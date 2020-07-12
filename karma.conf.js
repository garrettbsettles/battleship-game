/* yarn add -D karma jasmine-core karma-jasmine karma-spec-reporter karma-chrome-launcher karma-firefox-launcher karma-edge-launcher karma-safari-launcher karma-spec-reporter */
module.exports = function (config) {
	config.set({
		basePath: '.',
		frameworks: ['jasmine'],
		files: [{ pattern: 'test/**/*.spec.ts', watched: false }],

		preprocessors: { 'test/**/*.spec.ts': ['rollup'] },

		rollupPreprocessor: {
			plugins: [
				require('rollup-plugin-postcss'),
				require('rollup-plugin-typescript'),
				require('postcss-preset-env'),
			],
			output: {
				format: 'iife',
				name: 'bundle',
				sourcemap: 'inline',
			},
		},

		reporters: ['spec'],
		browsers: ['Chrome', 'Firefox', 'Safari'],
	});
};
