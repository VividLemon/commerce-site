module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		// 'plugin:vue/essential',
		'plugin:vue/vue3-recommended',
		'standard'
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: [
		'vue',
		'@typescript-eslint'
	],
	rules: {
		semi: ['warn', 'never'],
		'comma-dangle': ['error', 'never'],
		indent: ['error', 'tab', { MemberExpression: 1 }],
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'always',
			asyncArrow: 'always'
		}],
		'no-irregular-whitespace': [1],
		'no-trailing-spaces': [1],
		'no-multiple-empty-lines': [2, { max: 1 }],
		'newline-after-var': ['warn'],
		'eol-last': ['error', 'always'],
		'space-before-blocks': ['error', 'always'],
		'prefer-arrow-callback': 'error',
		eqeqeq: ['warn', 'allow-null'],
		'arrow-parens': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'no-tabs': ['error', { allowIndentationTabs: true }]
	}
}
