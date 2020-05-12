module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		__DEV__: 'readonly'
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['prettier', 'import', 'jsx-a11y', 'react', 'react-hooks'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
		'import/prefer-default-export': 'off',
		'react/prefer-stateless-function': 'off',
		'react/state-in-constructor': 'off',
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'no-param-reassign': 'off',
		'no-console': ["error", {allow: ['tron']}],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn'
	},
};
