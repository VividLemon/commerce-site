const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./vendor/laravel/jetstream/**/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.vue'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'dark-100': '#E1E1E1',
				'dark-200': '#CFCFCF',
				'dark-300': '#B1B1B1',
				'dark-400': '#9E9E9E',
				'dark-500': '#7E7E7E',
				'dark-600': '#626262',
				'dark-700': '#515151',
				'dark-800': '#3B3B3B',
				'dark-900': '#222222'
			}
		}
	},
	plugins: []
}
